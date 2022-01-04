INSERT INTO users (email, password) VALUES
('fake_email@fake-domain.com','$10$RPcyCDMX/GCpleJzwmJM0ui4uhVD0D4UvqHnDPWtVLVxW69dIkwQO');

INSERT INTO folders (name, users_id) VALUES
('Task 1',1);

INSERT INTO todos (name, completed, users_id, folders_id) VALUES
('Feed dog',1,1,1);