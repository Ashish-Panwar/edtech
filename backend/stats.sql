INSERT INTO stats (id, value, suffix, label, sort_order, is_active, created_at, updated_at)
VALUES
(gen_random_uuid(), 25000, '+', 'Students Trained', 1, true, NOW(), NOW()),
(gen_random_uuid(), 500, '+', 'Top 100 Ranks', 2, true, NOW(), NOW()),
(gen_random_uuid(), 98, '%', 'Selection Rate', 3, true, NOW(), NOW()),
(gen_random_uuid(), 20, '+', 'Years of Excellence', 4, true, NOW(), NOW());