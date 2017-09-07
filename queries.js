/* Fill out these functions using Mongoose queries*/

var fs = require('fs'),
mongoose = require('mongoose'), 
Schema = mongoose.Schema, 
Listing = require('./ListingSchema.js'), 
config = require('./config.js'),
json = require('./listings.json');

/* Connect to your database */
mongoose.connect(config.db.uri);

var findLibraryWest = function() {
  Listing.findOne({'name': 'Library West'}, function(err,listing){
    if(err){
      console.log(err);
    } else{
      console.log(listing);
    }
  })
};

var removeCable = function() {
   Listing.findOneAndRemove({'code':'CABL'}, function(err, listing){
    if(err){
      console.log(err);
    } else{
      console.log(listing);
    }
   })
  
};

var updatePhelpsLab = function() {
  Listing.findOne({'name': 'Phelps Laboratory'}, function(err, listing){
    if(err){
      console.log(err);
    } else{
      listing.coordinates.latitude =  29.6406329;
      listing.coordinates.longitude = -82.34558270000002;
      listing.address = "1275 Center Drive Biomedical Sciences Bldg J383 P.O. Box 116131 Gainesville, FL 32611";
      listing.save(function(err, newListing){
        if(err){
          console.log(err);
        } else {
          console.log(newListing);
        }
      });
    }
  });
};

var retrieveAllListings = function() {
  Listing.find({}, function(err, collection){
    if(err){
      console.log(err);
    } else{
      console.log(collection);
    }
  })
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
