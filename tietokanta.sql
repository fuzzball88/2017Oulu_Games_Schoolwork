create table palaute(
    id int primary key auto_increment,
    etunimi varchar(50) not null,
    sukunimi varchar(50) not null,
    email varchar(100),
    teksti text
);