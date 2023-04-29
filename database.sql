-- Create a database named **react_gallery**, then create this table vvvv
CREATE TABLE "gallery" (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR(200) NOT NULL,
	"description" VARCHAR(200) NOT NULL,
	"likes" INT
);

-- initial test insert
INSERT INTO "gallery" ("path", "description", "likes")
VALUES
('images/wedding_photo.jpg', 'My wife and I on our wedding day', 0);

-- the rest of the data
INSERT INTO "gallery" ("path", "description", "likes")
VALUES
('images/AnElephantEar.jpg', 'I love elephant ears. Or really, junk pastry foods in general', 0),
('images/BeautifulWatersOfLakeMichigan.jpg', 'The tranquil and beautiful waters of Lake Michigan, seen from Mackinaw Island', 0),
('images/CostaRicaSpaPond.jpg', 'The spa at the Costa Rican resort my wife and I went to on our honeymoon', 0),
('images/FirstSummerMarriedCamperLiving.jpg', 'The camper my wife and I lived in the first summer we were married', 0),
('images/HoneymoonBedroomCostaRica.jpg', 'The view from our Costa Rican bedroom. Hope you like waterfall white-noise to fall asleep to!', 0),
('images/Koda&BrooklynAtJayCooke.jpg', 'My wife and dog at Jay Cooke Park', 0),
('images/KodaAtJayCooke.jpg', 'Koda knows she looks great in the wild', 0),
('images/LookingOverEthiopianLandscape.jpg', 'Checking out the Ethiopian mountain view', 0),
('images/MyGoodFriendsBeingGoons.jpg', 'My friends are goons, but they are my goons', 0),
('images/MyTeamInEthiopia.jpg', 'The incredible people I lived and worked with in Ethiopia', 0),
('images/OneTimeIMetJoshDun.jpg', 'Terrible picture, but one time I met Josh Dun. That was pretty cool', 0),
('images/SunriseWithBalloonsOverCapadocia.jpg', 'Watching the hot air balloons rise over the Capadocian landscape is something else', 0),
('images/TheLibraryAtEphesus.jpg', 'Ephesus was very cool. This is the library', 0),
('images/TheOnlyTimeIHadAProperVikingBeard.jpg', 'My Viking heritage sadly ends right before the beard and muscle genes', 0),
('images/Velma&Shaggy.jpg', 'I never realized how much I look like Shaggy until I got second place in a Halloween costume contest', 0),
('images/WatchingHotAirBalloonsOverCapadocia.jpg', 'Turkey is amazing, and I will definitely visit again', 0),
('images/WhenWeFirstMetOurDog.jpg', 'One of the first times we met Koda, our dog-to-be', 0);