-- 创建`开发数据库`abs及用户和权限：

create DATABASE abs CHARACTER SET utf8 COLLATE utf8_general_ci;

create user abs_user@'%' identified by 'abs~123456$';

grant all privileges on abs.* to abs_user@'%';


-- 创建`测试数据库`test及用户和权限：
create DATABASE test CHARACTER SET utf8 COLLATE utf8_general_ci;

create user test_user@'%' identified by 'test123';

grant all privileges on test.* to test_user@'%';


-- 创建`生产数据库`kysec_abs及用户和权限：

create DATABASE kysec_abs CHARACTER SET utf8 COLLATE utf8_general_ci;

create user kysec_abs_user@'%' identified by 'kysec_abs~123456$';

grant all privileges on kysec_abs.* to kysec_abs_user@'%';


--
--
-- select User, Host from mysql.user;
use mysql;

select User, Host from user;

-- 下面哪一个work？
UPDATE user SET authentication_string = PASSWORD('abs~123456$') WHERE User='abs_user' AND Host='%';
set password for 'abs_user'@'%' = PASSWORD('abs~123456$');

flush privileges;
