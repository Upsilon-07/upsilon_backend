
-- TABLE meals
-- Breakfast
INSERT INTO `meals` (`meal_name`, `duration`, `image`, `meal_type`, `description`) 
VALUES ('Greek Yogurt Parfait', 10, 'greek_yogurt_parfait.jpg', 'Breakfast', 'A nutritious breakfast parfait with Greek yogurt, fresh berries, and granola.');
VALUES ('Oatmeal with Almonds and Banana', 15, 'oatmeal_banana.jpg', 'Breakfast', 'Heart-healthy oatmeal topped with sliced almonds and ripe bananas.');
VALUES ('Egg and Spinach Breakfast Wrap', 20, 'egg_spinach_wrap.jpg', 'Breakfast', 'A protein-packed breakfast wrap with scrambled eggs and fresh spinach.');

-- Lunch
INSERT INTO `meals` (`meal_name`, `duration`, `image`, `meal_type`, `description`) 
VALUES ('Quinoa Salad with Chickpeas', 20, 'quinoa_chickpea_salad.jpg', 'Lunch', 'A satisfying quinoa salad with chickpeas, cucumbers, and a lemon tahini dressing.');
VALUES ('Grilled Chicken Caesar Salad', 15, 'caesar_salad.jpg', 'Lunch', 'A classic Caesar salad with grilled chicken breast and homemade dressing.');
VALUES ('Avocado and Turkey Wrap', 10, 'avocado_turkey_wrap.jpg', 'Lunch', 'A flavorful wrap with sliced avocado, turkey, and a light mayo spread.');

--Dinner
INSERT INTO `meals` (`meal_name`, `duration`, `image`, `meal_type`, `description`) 
VALUES ('Salmon with Quinoa and Asparagus', 25, 'salmon_quinoa_asparagus.jpg', 'Dinner', 'Baked salmon served with quinoa and roasted asparagus.');
VALUES ('Mediterranean Stuffed Bell Peppers', 30, 'stuffed_peppers.jpg', 'Dinner', 'Bell peppers filled with a Mediterranean-inspired mixture of rice, vegetables, and herbs.');
VALUES ('Grilled Vegetable and Tofu Stir-Fry', 20, 'tofu_stir_fry.jpg', 'Dinner', 'Stir-fried tofu and a variety of vegetables in a savory sauce.');

-- Snacks
INSERT INTO `meals` (`meal_name`, `duration`, `image`, `meal_type`, `description`) 
VALUES ('Hummus and Veggie Platter', 10, 'hummus_veggie_platter.jpg', 'Snack', 'A healthy snack platter featuring hummus and fresh-cut vegetables.');
VALUES ('Mixed Berry Smoothie', 5, 'mixed_berry_smoothie.jpg', 'Snack', 'A refreshing smoothie made with mixed berries, yogurt, and honey.');
VALUES ('Almonds and Dried Fruits', 5, 'almonds_dried_fruits.jpg', 'Snack', 'A satisfying snack of almonds and a variety of dried fruits.');
