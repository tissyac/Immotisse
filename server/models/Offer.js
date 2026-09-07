const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  mainCategory: { type: String, enum: ['promotion', 'vente'], required: true },
  subCategory: { type: String, enum: ['maison', 'terrain', 'locaux_commerciaux', ''], default: '' },
  title: { type: String, required: true },
  description: String,
  address: String,
  city: String,
  area: Number,
  price: Number,
  paymentTerms: String,
  propertyType: String,
  apartmentTypes: [String],
  totalUnits: Number,
  totalFloors: Number,
  elevator: Boolean,
  parking: Boolean,
  floor: Number,
  projectStatus: { type: String, enum: ['conception', 'en_construction', 'pret_livraison', ''], default: '' },
  finishingState: { type: String, enum: ['brut', 'semi_fini', 'fini', ''], default: '' },
  availability: { type: String, enum: ['livraison_date', 'immediatement', 'sur_plan', ''], default: '' },
  deliveryDate: Date,
  // Champs spécifiques aux sous-catégories
  access: String, // Pour terrain
  viabilise: Boolean, // Pour terrain
  changeable: Boolean, // Pour terrain - possibilité d'échange
  facadeCount: Number, // Pour locaux commerciaux
  images: [String],
  videos: [String],
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  isPublished: { type: Boolean, default: false },
  isDraft: { type: Boolean, default: false },
  views: { type: Number, default: 0 },
  interactions: { type: Number, default: 0 },
  adminNote: String,
}, { timestamps: true });

offerSchema.index({ status: 1, isPublished: 1, mainCategory: 1 });
offerSchema.index({ createdAt: -1 });
offerSchema.index({ city: 1 });
offerSchema.index({ address: 1 });
offerSchema.index({ title: 'text', description: 'text' });

module.exports = mongoose.model('Offer', offerSchema);
