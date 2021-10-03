let nameAgeMapping = new Map();
 
//1. Add entries
nameAgeMapping.set("Lokesh", 37);
nameAgeMapping.set("Raj", 35);
nameAgeMapping.set("John", 40);
 
//2. Get entries
nameAgeMapping.get("John");     //40
 
//Check entry is present or not
nameAgeMapping.has("Lokesh");       //true
nameAgeMapping.has("Brian");        //false
 
//Size of the Map
nameAgeMapping.size;                //3
 
//Delete an entry
nameAgeMapping.delete("Lokesh");    // true
 
//Clear whole Map
nameAgeMapping.clear();             //Clear all entries