--Create DB
create database trms;

--Testing
select current_date;
INSERT INTO REQUESTS(REQUESTDATE,LOCATION,DESCRIPTION,COST,GRADINGFORMAT,EVENTTYPE,USERID,REQUESTTIME,JUSTIFICATION,EVENTTIME,EVENTDATE)values(current_date,'Jamaica','No',100.0,'Hard','Big',4,current_time,'I have big stupid','20:01:51','2020-09-10')

insert into pending values (8);

alter table requests
add firstname varchar;

alter table requests
add lastname varchar;

insert into pending values (9);
insert into supervisorapproved values (10);

select * from requests where requestid = (select requestid from pending);

select * from requests where requestid = (select requestid from supervisorapproved);

select * from requests where requestid = (select requestid from departheadapproved);

select * from requests where requestid = (select requestid from bencoapproved);

select * from requests where requestid = (select requestid from awarded);

select * from requests where requestid = (select requestid from denied);

--Create Tables
create table users (
	userid serial primary key,
	firstname varchar,
	lastname varchar,
	usertype varchar,
	balance numeric,
	reportsto int,
	email varchar
);

create table logins (
	username varchar primary key,
	password varchar,
	userid int
);

create table requests (
	requestid serial primary key,
	requestdate date,
	location varchar,
	description varchar,
	cost numeric,
	gradingformat varchar,
	eventtype varchar,
	userid int
);

create table pending (
	requestid int
);

create table supervisorapproved (
	requestid int
);

create table departheadapproved (
	requestid int
);

create table bencoapproved (
	requestid int
);

create table awarded (
	requestid int
);

create table denied (
	requestid int
);

--Create Foreign Keys
alter table users
add constraint fk_user_reportsto
foreign key (reportsto) references users(userid) on delete cascade;

alter table logins
add constraint fk_login_user
foreign key (userid) references users(userid) on delete cascade;

alter table requests
add constraint fk_request_user
foreign key (userid) references users(userid) on delete cascade;

alter table pending
add constraint fk_pending_request
foreign key (requestid) references requests(requestid) on delete cascade;

alter table supervisorapproved
add constraint fk_supervisorapproved_request
foreign key (requestid) references requests(requestid) on delete cascade;

alter table departheadapproved 
add constraint fk_departhead_request
foreign key (requestid) references requests(requestid) on delete cascade;

alter table bencoapproved 
add constraint fk_bencoapproved_request
foreign key (requestid) references requests(requestid) on delete cascade;

alter table awarded
add constraint fk_awarded_request
foreign key (requestid) references requests(requestid) on delete cascade;

alter table denied
add constraint fk_denied_request
foreign key (requestid) references requests(requestid) on delete cascade;