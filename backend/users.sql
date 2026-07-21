INSERT INTO users (id, name, email, password_hash, role, created_at, updated_at)
VALUES
(gen_random_uuid(), 'Admin', 'admin@premiumcoaching.com', '$2b$10$J5IF2sVVn/PDh8jMQ6g9wOt5T0yVOpUZpkn05hpEAJvZmlym37OXK', 'admin', NOW(), NOW());