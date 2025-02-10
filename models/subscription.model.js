import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Subscription Name is required"],
        trim: true,
        minLength: 4,
        maxLength: 100,
    },
    price: {
        type: Number,
        required: [true, "Subscription Price is required"],
        min: [0, "Price must be greater than zero"],
    },
    currency: {
        type: String,
        enum: ['USD', 'KSH', 'TZS'],
        default: 'USD'
    },
    frequency: {
        type: String,
        enum: ["daily", "weekly", "monthly", "yearly"],
    },
    category: {
        type: String,
        enum: ["starter", "growth", "scale"],
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        enum: ["active", "canceled", "expired"],
        default: "active",
    },
    startDate: {
        type: Date,
        required: true,
        validate: {
            validator: (value) => value <= new Date(),
            message: "start date must be in the past",
        }
    },
    renewalDate: {
        type: Date,
        required: true,
        validate: {
            validator: function (value) {
                return value > this.startDate;
            },
            message: "Renewal date must be after the start date"
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
}, { timestamps: true });


// Autocalculate the renewal date
subscriptionSchema.pre('save', function(next) {
    if(!this.renewalDate) {
        const renewalPeriods = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365,
        }
        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);
    }

    //Autoupdate the status if the renewal date has passed
    if (this.renewalDate < new Date()) {
        this.status = "expired"
    }

    next();
});


