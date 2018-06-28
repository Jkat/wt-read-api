const DEFAULT_HOTEL_STRING = 'id,location,name,description,contacts,address,currency,images,amenities,updatedAt';
const DEFAULT_HOTELS_STRING = 'id,location,name';

const OBLIGATORY_FIELDS = ['id'];
const DESCRIPTION_FIELDS = [
  'name',
  'description',
  'location',
  'contacts',
  'address',
  'roomTypes',
  'timezone',
  'currency',
  'images',
  'amenities',
  'updatedAt',
];

const HOTEL_FIELDS = [
  'manager',
  'id',
];

module.exports = {
  OBLIGATORY_FIELDS,
  DESCRIPTION_FIELDS,
  HOTEL_FIELDS,
  DEFAULT_HOTELS_STRING,
  DEFAULT_HOTEL_STRING,
};
