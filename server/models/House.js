import { Schema } from "mongoose";

export const HouseSchema = new Schema(
    {
        bedrooms: { type: Number, required: true, },
        levels: { type: Number, },
        bathrooms: { type: Number, },
        petFriendly: { type: Boolean, required: true, },
        kidFriendly: { type: Boolean, required: true, }
    },
    { timestamps: true, toJSON: { virtuals: true } }

)