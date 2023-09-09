
-- TABLE meals
-- Breakfast
INSERT INTO `meals` (`meal_name`, `duration`, `image`, `meal_type`, `description`) 
VALUES ('Greek Yogurt Parfait', 10, 'https://plus.unsplash.com/premium_photo-1669680785558-c189b49aed4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80', 'Breakfast', 'A nutritious breakfast parfait with Greek yogurt, fresh berries, and granola.');
VALUES ('Oatmeal with Almonds and Banana', 15, 'https://images.unsplash.com/photo-1541809570-cce873416d94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80', 'Breakfast', 'Heart-healthy oatmeal topped with sliced almonds and ripe bananas.');
VALUES ('Egg and Spinach Breakfast Wrap', 20, 'https://images.unsplash.com/photo-1667499707432-0524fcfb63ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2823&q=80', 'Breakfast', 'A protein-packed breakfast wrap with scrambled eggs and fresh spinach.');

-- Lunch
INSERT INTO `meals` (`meal_name`, `duration`, `image`, `meal_type`, `description`) 
VALUES ('Quinoa Salad with Chickpeas', 20, 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2864&q=80', 'Lunch', 'A satisfying quinoa salad with chickpeas, cucumbers, and a lemon tahini dressing.');
VALUES ('Grilled Chicken Caesar Salad', 15, 'https://images.unsplash.com/photo-1582034986517-30d163aa1da9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2960&q=80', 'Lunch', 'A classic Caesar salad with grilled chicken breast and homemade dressing.');
VALUES ('Avocado and Turkey Wrap', 10, 'https://img.freepik.com/free-photo/shawarma-from-juicy-beef-lettuce-tomatoes-cucumbers-paprika-onion-pita-bread-with-spinach-diet-menu_2829-14466.jpg?w=1480&t=st=1694270898~exp=1694271498~hmac=0d8f869a5ca48e65d96432dba0a2b7b1f55ac7fd6d129ad183f6ef903a2ebcd8', 'Lunch', 'A flavorful wrap with sliced avocado, turkey, and a light mayo spread.');

--Dinner
INSERT INTO `meals` (`meal_name`, `duration`, `image`, `meal_type`, `description`) 
VALUES ('Salmon with Quinoa and Asparagus', 25, 'https://img.freepik.com/premium-photo/salmon-fillet-grilled-with-bulgur-green-beans-healthy-food-diet-top-view_745171-1404.jpg?w=740', 'Dinner', 'Baked salmon served with quinoa and roasted asparagus.');
VALUES ('Mediterranean Stuffed Bell Peppers', 30, 'https://img.freepik.com/free-photo/peppers-stuffed-with-potatoes-chorizo_2829-11221.jpg?w=900&t=st=1694271058~exp=1694271658~hmac=12ac78f9826465140e785a48a39ab8392570df685d5317b015061b3fbbc07d05', 'Dinner', 'Bell peppers filled with a Mediterranean-inspired mixture of rice, vegetables, and herbs.');
VALUES ('Grilled Vegetable and Tofu Stir-Fry', 20, 'https://img.freepik.com/free-photo/top-view-high-protein-meal-assortment_23-2149089637.jpg?w=1480&t=st=1694271169~exp=1694271769~hmac=49da894b35661d95a4cd6321b57ab2dc10bbce268222e1318df62cb4721d3035', 'Dinner', 'Stir-fried tofu and a variety of vegetables in a savory sauce.');

-- Snacks
INSERT INTO `meals` (`meal_name`, `duration`, `image`, `meal_type`, `description`) 
VALUES ('Hummus and Veggie Platter', 10, 'https://img.freepik.com/free-photo/top-view-hummus-with-assortment-vegetables_23-2148562749.jpg?w=1480&t=st=1694271200~exp=1694271800~hmac=8079f401974bb66b61f652ee78561462c3adee6208e375546fc42110d77f0274', 'Snack', 'A healthy snack platter featuring hummus and fresh-cut vegetables.');
VALUES ('Mixed Berry Smoothie', 5, 'https://img.freepik.com/free-photo/high-angle-glasses-with-smoothie_23-2148751825.jpg?w=826&t=st=1694271227~exp=1694271827~hmac=88eb85b0659b53d108e9fe19eea2f5c98f6646155d7ed4ae82186fdc24ac732b', 'Snack', 'A refreshing smoothie made with mixed berries, yogurt, and honey.');
VALUES ('Almonds and Dried Fruits', 5, 'https://img.freepik.com/free-photo/top-view-mix-nuts-walnuts-raisins-peanuts-almonds_141793-4087.jpg?w=1480&t=st=1694271259~exp=1694271859~hmac=54f04efe690b67183117bd71cafa92323026db20f54d7595fc47471e1c47f3ab', 'Snack', 'A satisfying snack of almonds and a variety of dried fruits.');
