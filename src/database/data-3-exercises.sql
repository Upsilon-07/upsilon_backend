
-- TABLE exercises
-- Exercises for 'Introduction to Yoga'
INSERT INTO exercise (exercise_name, duration, duration_type, description, difficulty, image, lesson_id) VALUES
('Mountain Pose', 30, 'seconds', 'Stand tall with feet together, arms at your sides, and focus on steady breathing.', 'Easy', 'https://www.yogaclassplan.com/wp-content/uploads/2021/06/mountain.jpg', 1),
('Deep Breathing', 5, 'minutes', 'Practice deep diaphragmatic breathing to relax the body and mind.', 'Easy', 'https://www.artofliving.org/sites/www.artofliving.org/files/styles/original_image/public/unity2/blog_image/breathing.jpg?itok=AYoqgfFy', 1),
('Child''s Pose', 45, 'seconds', 'Kneel on the floor, touch your big toes together, and sit on your heels. Stretch your arms forward and rest your forehead on the ground.', 'Easy', 'https://media.istockphoto.com/id/1264822134/vector/vector-illustration-of-yoga-pose.jpg?s=612x612&w=0&k=20&c=HhRxmPiXzryeaI9rIh6BnE2kc3EzlWWoYCyTVknNNqs=', 1);

-- Exercises for 'Sun Salutations'
INSERT INTO exercise (exercise_name, duration, duration_type, description, difficulty, image, lesson_id) VALUES
('Mountain to Forward Fold', 30, 'seconds', 'Transition from mountain pose to a forward fold, reaching towards your toes.', 'Easy', 'mountain_to_forward_fold.jpg', 2),
('Plank Pose', 20, 'seconds', 'From a forward fold, step back into a plank position, engaging your core.', 'Intermediate', 'plank_pose.jpg', 2),
('Upward-Facing Dog', 25, 'seconds', 'Move from plank to upward-facing dog, arching your back and lifting your chest.', 'Intermediate', 'upward_facing_dog.jpg', 2);

-- Exercises for 'Basic Standing Poses'
INSERT INTO exercise (exercise_name, duration, duration_type, description, difficulty, image, lesson_id) VALUES
('Mountain Pose', 30, 'seconds', 'Start in a tall standing position with feet together and arms at your sides.', 'Easy', 'mountain_pose.jpg', 3),
('Warrior I', 45, 'seconds', 'Step one foot back, bend the front knee, and raise your arms overhead. Repeat on both sides.', 'Easy', 'warrior_i.jpg', 3),
('Triangle Pose', 40, 'seconds', 'From Warrior II, extend your front leg, reach forward, and hinge at the hip to create a triangle shape.', 'Intermediate', 'triangle_pose.jpg', 3);

-- Exercises for 'Energizing Sequence'
INSERT INTO exercise (exercise_name, duration, duration_type, description, difficulty, image, lesson_id) VALUES
('Downward-Facing Dog', 30, 'seconds', 'Start in a plank position, then lift your hips into an inverted V shape.', 'Intermediate', 'downward_facing_dog.jpg', 4),
('Plank to Chaturanga', 25, 'seconds', 'From plank, lower yourself halfway down, keeping your elbows close to your body.', 'Intermediate', 'plank_to_chaturanga.jpg', 4),
('Upward-Facing Dog', 30, 'seconds', 'Transition from Chaturanga to Upward-Facing Dog, lifting your chest and thighs off the ground.', 'Intermediate', 'upward_facing_dog.jpg', 4);

-- Exercises for 'Arm Balances'
INSERT INTO exercise (exercise_name, duration, duration_type, description, difficulty, image, lesson_id) VALUES
('Crow Pose', 40, 'seconds', 'Place your hands on the floor, knees on the back of your upper arms, and lift your feet off the ground.', 'Advanced', 'crow_pose.jpg', 5),
('Side Crow', 35, 'seconds', 'From Crow Pose, twist your torso to the side and balance on one arm.', 'Advanced', 'side_crow.jpg', 5),
('Firefly Pose', 45, 'seconds', 'Sit down, place your hands on the floor between your legs, and lift your body into a balance.', 'Advanced', 'firefly_pose.jpg', 5);

-- Exercises for 'Backbend Workshop'
INSERT INTO exercise (exercise_name, duration, duration_type, description, difficulty, image, lesson_id) VALUES
('Cobra Pose', 30, 'seconds', 'Lie on your belly, place your hands under your shoulders, and lift your chest off the ground.', 'Easy', 'cobra_pose.jpg', 6),
('Camel Pose', 40, 'seconds', 'Kneel, lean back, and reach your hands to your heels while arching your back.', 'Intermediate', 'camel_pose.jpg', 6),
('Wheel Pose', 45, 'seconds', 'Lie on your back, bend your elbows, and lift your chest and hips off the ground.', 'Intermediate', 'wheel_pose.jpg', 6);

-- Exercises for 'Full Body Sculpt'
INSERT INTO exercise (exercise_name, duration, duration_type, description, difficulty, image, lesson_id) VALUES
('Squat Jumps', 45, 'seconds', 'Perform deep squats and explode into a jump, landing softly.', 'Intermediate', 'squat_jumps.jpg', 7),
('Push-Up Variations', 30, 'seconds', 'Perform different push-up variations to target chest and triceps.', 'Intermediate', 'push_up_variations.jpg', 7),
('Plank with Leg Lift', 40, 'seconds', 'From a plank position, lift one leg off the ground while maintaining core engagement.', 'Intermediate', 'plank_leg_lift.jpg', 7);

-- Exercises for 'Core Strengthening'
INSERT INTO exercise (exercise_name, duration, duration_type, description, difficulty, image, lesson_id) VALUES
('Russian Twists', 30, 'seconds', 'Sit on the floor, lean back slightly, and twist your torso while holding a weight or your hands together.', 'Intermediate', 'russian_twists.jpg', 8),
('Leg Raises', 25, 'seconds', 'Lie on your back, lift your legs off the ground, and lower them slowly.', 'Intermediate', 'leg_raises.jpg', 8),
('Plank with Knee to Elbow', 40, 'seconds', 'From a plank position, bring your knee to the opposite elbow while maintaining core stability.', 'Intermediate', 'plank_knee_elbow.jpg', 8);

-- Exercises for 'Upper Body Tone'
INSERT INTO exercise (exercise_name, duration, duration_type, description, difficulty, image, lesson_id) VALUES
('Bicep Curls', 35, 'seconds', 'Hold dumbbells and curl your arms, targeting the biceps.', 'Easy', 'bicep_curls.jpg', 9),
('Tricep Dips', 30, 'seconds', 'Sit on the edge of a chair, place your hands beside your hips, and lower and lift your body.', 'Intermediate', 'tricep_dips.jpg', 9),
('Shoulder Press', 40, 'seconds', 'Hold dumbbells at shoulder height and press them overhead.', 'Intermediate', 'shoulder_press.jpg', 9);

-- Exercises for 'Gentle Stretches'
INSERT INTO exercise (exercise_name, duration, duration_type, description, difficulty, image, lesson_id) VALUES
('Neck Stretches', 3, 'repetitions', 'Gently tilt your head to each side, front, and back to stretch the neck muscles.', 'Easy', 'neck_stretches.jpg', 10),
('Seated Forward Fold', 30, 'seconds', 'Sit down and reach your hands toward your feet, folding forward from the hips.', 'Easy', 'seated_forward_fold.jpg', 10),
('Cat-Cow Stretch', 5, 'repetitions', 'Move through cat (rounding your back) and cow (arching your back) stretches.', 'Easy', 'cat_cow_stretch.jpg', 10);

-- Exercises for 'Deep Relaxation'
INSERT INTO exercise (exercise_name, duration, duration_type, description, difficulty, image, lesson_id) VALUES
('Corpse Pose', 5, 'minutes', 'Lie down on your back, close your eyes, and focus on your breath and relaxation.', 'Easy', 'corpse_pose.jpg', 11),
('Legs Up the Wall', 10, 'minutes', 'Sit with your side against a wall, then lie down and extend your legs up the wall.', 'Easy', 'legs_up_the_wall.jpg', 11),
('Body Scan Meditation', 15, 'minutes', 'Mentally scan your body from head to toe, releasing tension as you go.', 'Easy', 'body_scan_meditation.jpg', 11);

-- Exercises for 'Soothing Meditation'
INSERT INTO exercise (exercise_name, duration, duration_type, description, difficulty, image, lesson_id) VALUES
('Guided Breath Awareness', 10, 'minutes', 'Focus on your breath, observing its natural rhythm without trying to change it.', 'Easy', 'guided_breath_awareness.jpg', 12),
('Loving-kindness Meditation', 15, 'minutes', 'Repeat phrases of love and well-wishing to yourself and others.', 'Easy', 'loving_kindness_meditation.jpg', 12),
('Nature Visualization', 20, 'minutes', 'Imagine yourself in a peaceful natural setting, engaging all your senses.', 'Easy', 'nature_visualization.jpg', 12);

-- Exercises for 'Dynamic Flow Sequence'
INSERT INTO exercise (exercise_name, duration, duration_type, description, difficulty, image, lesson_id) VALUES
('Sun Salutation A', 5, 'repetitions', 'Perform the classic Sun Salutation A sequence to warm up the body.', 'Intermediate', 'sun_salutation_a.jpg', 13),
('Warrior II to Reverse Warrior', 25, 'seconds', 'Flow from Warrior II to Reverse Warrior, engaging core and leg muscles.', 'Intermediate', 'warrior_to_reverse_warrior.jpg', 13),
('High Plank to Low Plank', 15, 'seconds', 'Move from a high plank to a low plank, engaging your core and triceps.', 'Intermediate', 'high_plank_to_low_plank.jpg', 13);

-- Exercises for 'Balancing Poses'
INSERT INTO exercise (exercise_name, duration, duration_type, description, difficulty, image, lesson_id) VALUES
('Tree Pose', 30, 'seconds', 'Balance on one foot, pressing the sole of your other foot against your inner thigh.', 'Intermediate', 'tree_pose.jpg', 14),
('Eagle Pose', 40, 'seconds', 'Cross one leg over the other and wrap your arms to balance in this twist.', 'Intermediate', 'eagle_pose.jpg', 14),
('Dancer''s Pose', 35, 'seconds', 'Hold one foot with one hand and extend your opposite arm forward in this graceful pose.', 'Intermediate', 'dancers_pose.jpg', 14);

-- Exercises for 'Inversions Workshop'
INSERT INTO exercise (exercise_name, duration, duration_type, description, difficulty, image, lesson_id) VALUES
('Downward-Facing Dog', 30, 'seconds', 'Start in a plank position, then lift your hips into an inverted V shape.', 'Intermediate', 'downward_facing_dog.jpg', 15),
('Headstand Prep', 25, 'seconds', 'Practice the preparation for a headstand by balancing on your forearms.', 'Intermediate', 'headstand_prep.jpg', 15),
('Supported Shoulderstand', 40, 'seconds', 'Lie on your back, lift your legs and hips over your head, and support your back with your hands.', 'Intermediate', 'supported_shoulderstand.jpg', 15);

-- Exercises for 'Hatha Basics'
INSERT INTO exercise (exercise_name, duration, duration_type, description, difficulty, image, lesson_id) VALUES
('Mountain Pose', 30, 'seconds', 'Begin with standing tall, grounding your feet and lifting through the crown of your head.', 'Easy', 'mountain_pose.jpg', 16),
('Breath Awareness', 5, 'minutes', 'Sit comfortably and focus on observing your breath without trying to control it.', 'Easy', 'breath_awareness.jpg', 16),
('Cat-Cow Stretch', 10, 'repetitions', 'Move through cat (rounding your back) and cow (arching your back) stretches.', 'Easy', 'cat_cow_stretch.jpg', 16);

-- Exercises for 'Alignment Workshop'
INSERT INTO exercise (exercise_name, duration, duration_type, description, difficulty, image, lesson_id) VALUES
('Standing Posture Alignment', 20, 'minutes', 'Practice proper alignment in foundational standing poses like Warrior II and Triangle.', 'Intermediate', 'standing_posture_alignment.jpg', 17),
('Hip Opening Alignment', 25, 'minutes', 'Explore alignment cues to open the hips safely in poses like Pigeon and Butterfly.', 'Intermediate', 'hip_opening_alignment.jpg', 17),
('Spinal Alignment', 15, 'minutes', 'Focus on maintaining a neutral spine in poses like Bridge and Sphinx.', 'Intermediate', 'spinal_alignment.jpg', 17);

-- Exercises for 'Pranayama Practice'
INSERT INTO exercise (exercise_name, duration, duration_type, description, difficulty, image, lesson_id) VALUES
('Nadi Shodhana (Alternate Nostril Breathing)', 10, 'minutes', 'Practice alternate nostril breathing to balance energy channels.', 'Easy', 'nadi_shodhana.jpg', 18),
('Ujjayi Breath', 15, 'minutes', 'Learn and practice the oceanic breath to create a calming and grounding effect.', 'Easy', 'ujjayi_breath.jpg', 18),
('Bhramari (Bee Breath)', 20, 'minutes', 'Experience the bee breath to soothe the mind and reduce stress.', 'Easy', 'bhramari_bee_breath.jpg', 18);

-- Exercises for 'Introduction to Yin Yoga'
INSERT INTO exercise (exercise_name, duration, duration_type, description, difficulty, image, lesson_id) VALUES
('Butterfly Pose', 3, 'minutes', 'Sit down, bring the soles of your feet together, and gently fold forward.', 'Easy', 'butterfly_pose.jpg', 19),
('Dragon Pose', 5, 'minutes', 'Step one foot forward into a lunge and sink your hips down to stretch the hip flexors.', 'Easy', 'dragon_pose.jpg', 19),
('Sphinx Pose', 4, 'minutes', 'Lie on your belly and prop yourself up on your forearms to gently arch your spine.', 'Easy', 'sphinx_pose.jpg', 19);

-- Exercises for 'Deep Stretching'
INSERT INTO exercise (exercise_name, duration, duration_type, description, difficulty, image, lesson_id) VALUES
('Seated Forward Fold', 4, 'minutes', 'Sit down and reach your hands toward your feet, folding forward from the hips.', 'Easy', 'seated_forward_fold.jpg', 20),
('Wide-Legged Forward Bend', 5, 'minutes', 'Stand with legs wide apart and fold forward, reaching hands toward the ground.', 'Easy', 'wide_legged_forward_bend.jpg', 20),
('Melting Heart Pose', 3, 'minutes', 'From a tabletop position, walk your hands forward and melt your chest toward the mat.', 'Easy', 'melting_heart_pose.jpg', 20);

-- Exercises for 'Meditative Yin'
INSERT INTO exercise (exercise_name, duration, duration_type, description, difficulty, image, lesson_id) VALUES
('Supported Child''s Pose', 5, 'minutes', 'Extend your arms forward and rest your forehead on a prop or the ground.', 'Easy', 'supported_childs_pose.jpg', 21),
('Reclining Bound Angle Pose', 6, 'minutes', 'Lie on your back, bring the soles of your feet together, and let your knees fall open.', 'Easy', 'reclining_bound_angle_pose.jpg', 21),
('Guided Body Scan', 8, 'minutes', 'Mentally scan your body from head to toe, releasing tension as you go.', 'Easy', 'guided_body_scan.jpg', 21);

-- Exercises for 'Mastering Arm Balances'
INSERT INTO exercise (exercise_name, duration, duration_type, description, difficulty, image, lesson_id) VALUES
('Crow Pose', 4, 'minutes', 'Place your hands on the floor, knees on the back of your upper arms, and lift your feet off the ground.', 'Advanced', 'crow_pose.jpg', 22),
('Firefly Pose', 5, 'minutes', 'Sit down, place your hands on the floor between your legs, and lift your body into a balance.', 'Advanced', 'firefly_pose.jpg', 22),
('One-Legged Crow', 4, 'minutes', 'From Crow Pose, lift one leg off the ground while maintaining balance with your hands.', 'Advanced', 'one_legged_crow.jpg', 22);

-- Exercises for 'Inversion Progressions'
INSERT INTO exercise (exercise_name, duration, duration_type, description, difficulty, image, lesson_id) VALUES
('Dolphin Pose', 3, 'minutes', 'Forearms on the ground, lift your hips and walk your feet closer, creating an inverted V shape.', 'Intermediate', 'dolphin_pose.jpg', 23),
('Wall Handstand', 4, 'minutes', 'Kick up to a handstand with your feet against a wall to practice alignment and balance.', 'Intermediate', 'wall_handstand.jpg', 23),
('Straddle L-Shape Handstand', 5, 'minutes', 'With legs spread wide, kick up to a handstand and create an L-shape with your body.', 'Intermediate', 'straddle_l_shape_handstand.jpg', 23);

-- Exercises for 'Deep Backbends'
INSERT INTO exercise (exercise_name, duration, duration_type, description, difficulty, image, lesson_id) VALUES
('Camel Pose', 4, 'minutes', 'Kneel, lean back, and reach your hands to your heels while arching your back.', 'Intermediate', 'camel_pose.jpg', 24),
('Bridge Pose', 5, 'minutes', 'Lie on your back, bend your knees, and lift your hips off the ground into a bridge shape.', 'Intermediate', 'bridge_pose.jpg', 24),
('Wheel Pose', 6, 'minutes', 'Lie on your back, bend your elbows, and lift your chest and hips off the ground.', 'Intermediate', 'wheel_pose.jpg', 24);

-- Exercises for 'Gentle Prenatal Flow'
INSERT INTO exercise (exercise_name, duration, duration_type, description, difficulty, image, lesson_id) VALUES
('Modified Sun Salutations', 4, 'minutes', 'Perform modified Sun Salutations to gently warm up the body.', 'Easy', 'modified_sun_salutations.jpg', 25),
('Gentle Warrior Poses', 5, 'minutes', 'Practice modified Warrior I and II poses for strength and balance.', 'Easy', 'gentle_warrior_poses.jpg', 25),
('Prenatal Cat-Cow Stretch', 3, 'minutes', 'Move through modified cat (rounding your back) and cow (arching your back) stretches.', 'Easy', 'prenatal_cat_cow_stretch.jpg', 25);

-- Exercises for 'Prenatal Strength and Balance'
INSERT INTO exercise (exercise_name, duration, duration_type, description, difficulty, image, lesson_id) VALUES
('Squat Holds', 4, 'minutes', 'Hold a squat position to strengthen the legs and pelvic muscles.', 'Easy', 'squat_holds.jpg', 26),
('Single-Leg Balance', 3, 'minutes', 'Practice balancing on one leg to improve stability and focus.', 'Easy', 'single_leg_balance.jpg', 26),
('Pelvic Tilts', 5, 'minutes', 'Lie on your back and practice tilting your pelvis to engage the core and lower back.', 'Easy', 'pelvic_tilts.jpg', 26);

-- Exercises for 'Relaxation and Breathing'
INSERT INTO exercise (exercise_name, duration, duration_type, description, difficulty, image, lesson_id) VALUES
('Box Breathing', 6, 'minutes', 'Inhale for a count of four, hold for four, exhale for four, and pause for four.', 'Easy', 'box_breathing.jpg', 27),
('Prenatal Relaxation Techniques', 7, 'minutes', 'Practice various relaxation techniques like visualization and progressive muscle relaxation.', 'Easy', 'prenatal_relaxation_techniques.jpg', 27),
('Lying Side Relaxation', 5, 'minutes', 'Lie on your side with pillows for support and focus on deep breathing.', 'Easy', 'lying_side_relaxation.jpg', 27);

-- Exercises for 'Introduction to Meditation'
INSERT INTO exercise (exercise_name, duration, duration_type, description, difficulty, image, lesson_id) VALUES
('Guided Breath Awareness', 5, 'minutes', 'Focus on your breath, observing its natural rhythm without trying to change it.', 'Easy', 'guided_breath_awareness.jpg', 28),
('Seated Meditation', 10, 'minutes', 'Sit comfortably with an upright posture and direct your attention to the breath.', 'Easy', 'seated_meditation.jpg', 28),
('Mindful Awareness', 15, 'minutes', 'Practice open awareness of thoughts, sensations, and emotions without attachment.', 'Easy', 'mindful_awareness.jpg', 28);

-- Exercises for 'Body Scan Meditation'
INSERT INTO exercise (exercise_name, duration, duration_type, description, difficulty, image, lesson_id) VALUES
('Head to Toe Body Scan', 10, 'minutes', 'Mentally scan your body from head to toe, noticing sensations along the way.', 'Easy', 'head_to_toe_body_scan.jpg', 29),
('Progressive Muscle Relaxation', 12, 'minutes', 'Tense and release each muscle group, promoting relaxation and awareness.', 'Easy', 'progressive_muscle_relaxation.jpg', 29),
('Breath Awareness Body Scan', 15, 'minutes', 'Combine body scan with breath awareness for a grounding meditation.', 'Easy', 'breath_awareness_body_scan.jpg', 29);

-- Exercises for 'Loving-kindness Meditation'
INSERT INTO exercise (exercise_name, duration, duration_type, description, difficulty, image, lesson_id) VALUES
('Self-Compassion Practice', 8, 'minutes', 'Direct loving-kindness and compassion towards yourself.', 'Easy', 'self_compassion_practice.jpg', 30),
('Loving-kindness for Loved Ones', 10, 'minutes', 'Extend feelings of love and well-wishing to loved ones.', 'Easy', 'loving_kindness_for_loved_ones.jpg', 30),
('Loving-kindness for All Beings', 12, 'minutes', 'Cultivate feelings of loving-kindness and goodwill for all beings.', 'Easy', 'loving_kindness_for_all_beings.jpg', 30);
