import mongoose from "mongoose"

const Schema = mongoose.Schema

const timeTableSchema = Schema({
    line: { type: mongoose.Schema.Types.ObjectId, ref: "Line" },
    dayOfWeek: String,
    firstTrain: Date,
    lastTrain: Date,
    startStation: String,
    endStation: String,
},{
  timestamp: true
})

const TimeTable = mongoose.model('TimeTable', timeTableSchema)

export {
  TimeTable
}