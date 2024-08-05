exports.mysql_setting = {
	host: 'localhost',
	user: 'root',
	password: 'MyNewPass',
	database: 'lecture_management',
	timezone: 'jst'
};
exports.getUsers = 'SELECT * FROM users';
exports.getUser = 'SELECT * FROM users WHERE mail = ?';