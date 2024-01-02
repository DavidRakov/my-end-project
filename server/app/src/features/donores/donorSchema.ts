import { Schema, model } from "mongoose";

const donorSchema = new Schema({
  Donor_ID: Number,

  oldDonor_ID: Number,

  oldDonor_ID2: Number,

  LastName: String,

  Street: String,

  StreetNumber: Number,

  City: String,

  City_id: Number,

  Phone: String,

  category: String,

  category_id: Number,

  campaignName: String,

  zone: Number,

  oldZone: Number,

  Folder: Number,

  Runway: Number,

  Contact: String,

  NoteCollecting: String,

  CheckAddress: Boolean,

  Checkgeneral: Boolean,

  Checkcampaign: Boolean,

  credit: Boolean,

  NotForCollecting: Boolean,

  Selection: Boolean,

  DateAddGreg: String,

  DateAddHeb: Date,

  CampaignAdd: String,

  lngCampaignAdd: Number,

  priority: Number,

  title: String,

  latitude: Number,

  longitude: Number,
});

donorSchema.index({ Donor_ID: 1 });
donorSchema.index({ City: 1 });
donorSchema.index({ category: 1 });
donorSchema.index({ campaignName: 1 });

export const Donor = model("donor", donorSchema);
