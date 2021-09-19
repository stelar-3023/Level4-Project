CREATE
DATABASE jwttutorial;

CREATE TABLE users
(
    user_id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    user_name     varchar(255) NOT NULL,
    user_email    varchar(255) NOT NULL,
    user_password varchar(255) NOT NULL
);

--insert test users
INSERT INTO users (user_name, user_email, user_password)
VALUES ('Steve', 'slarsen3023@gmail.com', 'test_password');