INSERT INTO department (name)
VALUES 
('Engineering'),
('Finance'),
('Marketing'),
('Management');

INSERT INTO role (title, salary, department_id)
VALUES
('Full Stack Developer', 70000, 1),
('Software Engineer', 100000, 1),
('Accountant', 80000, 2), 
('Finanical Analyst', 150000, 2),
('Marketing Specialist', 70000, 3), 
('Business Development', 90000, 3),
('Project Manager', 100000, 4),
('Operations Manager', 90000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Tom', 'Brady', 1, 1),
('Patrick', 'Mahomes', 2, null),
('Daniel', 'Jones', 3, 3),
('Russel', 'Wilson', 4, null),
('Baker', 'Mayfield', 5, 5),
('Lamaar', 'Jackson', 6, null),
('Ryan', 'Tannehill', 7, null),
('Aaron', 'Rodgers', 8, 7);