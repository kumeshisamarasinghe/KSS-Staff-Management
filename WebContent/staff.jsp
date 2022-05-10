<%@ page import="com.Staff"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Staff Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.6.0.min.js"></script>
<script src="Components/staff.js"></script>
</head>
<body>
<div class="container"><div class="row"><div class="col-6">
<h1>Staff Management</h1>
<form id="formStaff" name="formStaff">
 Staff Name:
 <input id="sname" name="sname" type="text"
 class="form-control form-control-sm">
 <br> Password:
 <input id="spassword" name="spassword" type="text"
 class="form-control form-control-sm">
 <br> Email:
 <input id="semail" name="semail" type="text"
 class="form-control form-control-sm">
 <br> Tel:
 <input id="stel" name="stel" type="text"
 class="form-control form-control-sm">
 <br> Salary:
 <input id="salary" name="salary" type="text"
 class="form-control form-control-sm">
 <br> Department:
 <input id="department" name="department" type="text"
 class="form-control form-control-sm">
 <br>
 <input id="btnSave" name="btnSave" type="button" value="Save"
 class="btn btn-primary">
 <input type="hidden" id="hidStaffIDSave"
 name="hidStaffIDSave" value="">
</form>
<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>
<br>
<div id="divStaffGrid">
 <%
 Staff staffObj = new Staff();
 out.print(staffObj.readStaff());
 %>
</div>
</div> </div> </div>
</body>
</html>