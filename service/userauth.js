//var db = require('mssql');
//var dbconfig = require('./dbconfig');
//var ps = null;

module.exports = function(db, dbconfig) {
    var ps = null;
    return {
        login: function(req, res, next) {
            //conn = new db.Connection(dbconfig, function(err) {
            db.connect(dbconfig, function(err) {
                //ps = new db.PreparedStatement(conn);
                ps = new db.PreparedStatement();
                ps.input('employeeno', db.NVarChar);
                var sqlstr = 'select employeeno, name, titleid, ofgroup from employee where employeeno = @employeeno';
                ps.prepare(sqlstr, function(err) {
                    ps.execute({
                        employeeno: req.query.employeeno
                    }, function(err, recordset) {
                        if (err) {
                            //console.log('login error: ' + err);
                            return next();
                        }
                        var user = {};
                        if (recordset.length > 0) {
                            user.employeeno = recordset[0].employeeno.trim();
                            user.name = recordset[0].name.trim();
                            user.titleid = recordset[0].titleid.trim();
                            user.ofgroup = recordset[0].ofgroup.trim();
                        }
                        ps.unprepare();
                        db.close();
                        res.send(user);
                        //console.log(process.memoryUsage());
                    });
                });
            });
        }
    };

}
