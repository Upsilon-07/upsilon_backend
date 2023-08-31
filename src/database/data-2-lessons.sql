
-- TABLE lessons
-- Lessons for 'Beginner Yoga'
INSERT INTO lessons (lesson_name, duration, lesson_type, description, difficulty, trainer, image, course_id) VALUES
('Introduction to Yoga', 15, 'Tutorial', 'An introduction to basic yoga poses and breathing techniques.', 'Easy', 'Emily Smith', 'https://www.pngitem.com/pimgs/m/171-1714022_woman-yoga-png-yoga-vector-png-transparent-png.png', 1),
('Sun Salutations', 20, 'Flow', 'Learn the classic sequence of sun salutations to warm up your body.', 'Easy', 'Emily Smith', 'https://us.123rf.com/450wm/lioputra/lioputra2208/lioputra220800223/190239803-man-doing-crescent-lunge-pose-or-anjaneyasana-exercise-flat-vector-illustration-isolated-on-white.jpg?ver=6', 1),
('Basic Standing Poses', 25, 'Tutorial', 'Practice foundational standing yoga poses for strength and balance.', 'Easy', 'Emily Smith', 'https://st4.depositphotos.com/11953928/25654/v/450/depositphotos_256549610-stock-illustration-fit-man-practicing-yoga.jpg', 1);

-- Lessons for 'Intermediate Flow'
INSERT INTO lessons (lesson_name, duration, lesson_type, description, difficulty, trainer, image, course_id) VALUES
('Energizing Sequence', 30, 'Flow', 'A dynamic sequence of poses to build strength and flexibility.', 'Intermediate', 'Michael Johnson', 'https://cdn-icons-png.flaticon.com/512/2789/2789816.png', 2),
('Arm Balances', 40, 'Tutorial', 'Learn various arm balances and techniques to achieve them.', 'Intermediate', 'Michael Johnson', 'https://cdn-icons-png.flaticon.com/512/2789/2789833.png', 2),
('Backbend Workshop', 35, 'Workshop', 'Explore backbending poses with proper alignment and support.', 'Intermediate', 'Michael Johnson', 'https://cdn-icons-png.flaticon.com/512/2789/2789935.png', 2);

-- Lessons for 'Power Yoga Sculpt'
INSERT INTO lessons (lesson_name, duration, lesson_type, description, difficulty, trainer, image, course_id) VALUES
('Full Body Sculpt', 45, 'Workout', 'A high-intensity yoga workout that targets the entire body.', 'Advanced', 'Jessica Williams', 'power_yoga_sculpt_lesson1.jpg', 3),
('Core Strengthening', 30, 'Workout', 'Focus on core engagement and strengthening through yoga poses.', 'Advanced', 'Jessica Williams', 'power_yoga_sculpt_lesson2.jpg', 3),
('Upper Body Tone', 40, 'Workout', 'Isolate and tone the muscles of the upper body using yoga.', 'Advanced', 'Jessica Williams', 'power_yoga_sculpt_lesson3.jpg', 3);

-- Lessons for 'Restorative Yoga'
INSERT INTO lessons (lesson_name, duration, lesson_type, description, difficulty, trainer, image, course_id) VALUES
('Gentle Stretches', 30, 'Practice', 'A series of gentle stretches to relax and rejuvenate.', 'Easy', 'David Lee', 'restorative_yoga_lesson1.jpg', 4),
('Deep Relaxation', 40, 'Practice', 'Experience deep relaxation through supported poses and breathwork.', 'Easy', 'David Lee', 'restorative_yoga_lesson2.jpg', 4),
('Soothing Meditation', 25, 'Meditation', 'Guided meditation to calm the mind and promote inner peace.', 'Easy', 'David Lee', 'restorative_yoga_lesson3.jpg', 4);

-- Lessons for 'Vinyasa Flow'
INSERT INTO lessons (lesson_name, duration, lesson_type, description, difficulty, trainer, image, course_id) VALUES
('Dynamic Flow Sequence', 45, 'Flow', 'A dynamic and fluid sequence of vinyasa poses.', 'Intermediate', 'Sophia Miller', 'vinyasa_flow_lesson1.jpg', 5),
('Balancing Poses', 30, 'Practice', 'Explore balancing poses that enhance stability and focus.', 'Intermediate', 'Sophia Miller', 'vinyasa_flow_lesson2.jpg', 5),
('Inversions Workshop', 50, 'Workshop', 'Learn techniques and alignment for inversions like headstand and handstand.', 'Intermediate', 'Sophia Miller', 'vinyasa_flow_lesson3.jpg', 5);

-- Lessons for 'Hatha Yoga'
INSERT INTO lessons (lesson_name, duration, lesson_type, description, difficulty, trainer, image, course_id) VALUES
('Hatha Basics', 30, 'Tutorial', 'Learn the foundational poses and principles of Hatha yoga.', 'Easy', 'Andrew Davis', 'hatha_yoga_lesson1.jpg', 6),
('Alignment Workshop', 40, 'Workshop', 'Explore proper alignment and modifications for key poses.', 'Intermediate', 'Andrew Davis', 'hatha_yoga_lesson2.jpg', 6),
('Pranayama Practice', 25, 'Practice', 'Discover various pranayama (breath control) techniques in Hatha yoga.', 'Easy', 'Andrew Davis', 'hatha_yoga_lesson3.jpg', 6);


-- Lessons for 'Yin Yoga'
INSERT INTO lessons (lesson_name, duration, lesson_type, description, difficulty, trainer, image, course_id) VALUES
('Introduction to Yin Yoga', 30, 'Tutorial', 'An introduction to the slow and deep practice of Yin yoga.', 'Easy', 'Olivia Brown', 'yin_yoga_lesson1.jpg', 7),
('Deep Stretching', 45, 'Practice', 'Explore long-held poses to target the connective tissues.', 'Easy', 'Olivia Brown', 'yin_yoga_lesson2.jpg', 7),
('Meditative Yin', 35, 'Meditation', 'Combine Yin poses with mindfulness meditation for relaxation.', 'Easy', 'Olivia Brown', 'yin_yoga_lesson3.jpg', 7);

-- Lessons for 'Advanced Asanas'
INSERT INTO lessons (lesson_name, duration, lesson_type, description, difficulty, trainer, image, course_id) VALUES
('Mastering Arm Balances', 50, 'Workshop', 'In-depth exploration and practice of advanced arm balances.', 'Advanced', 'William Clark', 'advanced_asanas_lesson1.jpg', 8),
('Inversion Progressions', 45, 'Practice', 'Progressive sequences to build up to advanced inversions.', 'Advanced', 'William Clark', 'advanced_asanas_lesson2.jpg', 8),
('Deep Backbends', 55, 'Practice', 'Experience a range of intense backbending poses with guidance.', 'Advanced', 'William Clark', 'advanced_asanas_lesson3.jpg', 8);

-- Lessons for 'Prenatal Yoga'
INSERT INTO lessons (lesson_name, duration, lesson_type, description, difficulty, trainer, image, course_id) VALUES
('Gentle Prenatal Flow', 40, 'Flow', 'A gentle flow sequence tailored to the needs of expectant mothers.', 'Easy', 'Emma Martinez', 'prenatal_yoga_lesson1.jpg', 9),
('Prenatal Strength and Balance', 45, 'Practice', 'Focus on building strength and balance in preparation for birth.', 'Easy', 'Emma Martinez', 'prenatal_yoga_lesson2.jpg', 9),
('Relaxation and Breathing', 30, 'Practice', 'Practice breathing techniques and relaxation for a smoother pregnancy.', 'Easy', 'Emma Martinez', 'prenatal_yoga_lesson3.jpg', 9);

-- Lessons for 'Mindfulness Meditation'
INSERT INTO lessons (lesson_name, duration, lesson_type, description, difficulty, trainer, image, course_id) VALUES
('Introduction to Meditation', 20, 'Tutorial', 'An introduction to the basics of mindfulness meditation.', 'Easy', 'Daniel Wilson', 'mindfulness_meditation_lesson1.jpg', 10),
('Body Scan Meditation', 25, 'Meditation', 'Practice a body scan meditation to develop awareness.', 'Easy', 'Daniel Wilson', 'mindfulness_meditation_lesson2.jpg', 10),
('Loving-kindness Meditation', 30, 'Meditation', 'Cultivate feelings of compassion and love through this meditation.', 'Easy', 'Daniel Wilson', 'mindfulness_meditation_lesson3.jpg', 10);
