para buscar port de sql
USE master
GO
xp_readerrorlog 0, 1, N'Server is listening on' 
GO

api test
{"nombre":"a","mail":"a","foto":"a","username":"a","password":"aaaaaaaa"}