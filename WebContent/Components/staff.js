$(document).ready(function()
{
if ($("#alertSuccess").text().trim() == "")
 {
 $("#alertSuccess").hide();
 }
 $("#alertError").hide();
});
// SAVE ============================================
$(document).on("click", "#btnSave", function(event)
{
// Clear alerts---------------------
 $("#alertSuccess").text("");
 $("#alertSuccess").hide();
 $("#alertError").text("");
 $("#alertError").hide();
// Form validation-------------------
var status = validateStaffForm();
if (status != true)
 {
 $("#alertError").text(status);
 $("#alertError").show();
 return;
 }
// If valid------------------------
var type = ($("#hidStaffIDSave").val() == "") ? "POST" : "PUT";
 $.ajax(
 {
 url : "StaffAPI",
 type : type,
 data : $("#formStaff").serialize(),
 dataType : "text",
 complete : function(response, status)
 {
 onStaffSaveComplete(response.responseText, status);
 }
 });
});

function onStaffSaveComplete(response, status)
{
if (status == "success")
 {
 var resultSet = JSON.parse(response);
 if (resultSet.status.trim() == "success")
 {
 $("#alertSuccess").text("Successfully saved.");
 $("#alertSuccess").show();
 $("#divStaffGrid").html(resultSet.data);
 } else if (resultSet.status.trim() == "error")
 {
 $("#alertError").text(resultSet.data);
 $("#alertError").show();
 }
 } else if (status == "error")
 {
 $("#alertError").text("Error while saving.");
 $("#alertError").show();
 } else
 {
 $("#alertError").text("Unknown error while saving..");
 $("#alertError").show();
 }
 14
 $("#hidStaffIDSave").val("");
 $("#formStaff")[0].reset();
}

// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{

 $("#hidStaffIDSave").val($(this).closest("tr").find('#hidStaffIDUpdate').val());
 $("#sname").val($(this).closest("tr").find('td:eq(0)').text());
 $("#spassword").val($(this).closest("tr").find('td:eq(1)').text());
 $("#semail").val($(this).closest("tr").find('td:eq(2)').text());
 $("#stel").val($(this).closest("tr").find('td:eq(3)').text());
 $("#salary").val($(this).closest("tr").find('td:eq(4)').text());
 $("#department").val($(this).closest("tr").find('td:eq(5)').text());
});

//REMOVE==============================
$(document).on("click", ".btnRemove", function(event)
{
 $.ajax(
 {
 url : "StaffAPI",
 type : "DELETE",
 data : "staffID=" + $(this).data("staffid"),
 dataType : "text",
 complete : function(response, status)
 {
 onStaffDeleteComplete(response.responseText, status);
 }
 });
});

function onStaffDeleteComplete(response, status)
{
if (status == "success")
 {
 var resultSet = JSON.parse(response);
 if (resultSet.status.trim() == "success")
 {
 $("#alertSuccess").text("Successfully deleted.");
 $("#alertSuccess").show();
 $("#divStaffGrid").html(resultSet.data);
 } else if (resultSet.status.trim() == "error")
 {
 $("#alertError").text(resultSet.data);
 $("#alertError").show();
 }
 } else if (status == "error")
 {
 $("#alertError").text("Error while deleting.");
 $("#alertError").show();
 } else
 {
 $("#alertError").text("Unknown error while deleting..");
 $("#alertError").show();
 }
}

// CLIENT-MODEL================================================================
function validateStaffForm()
{
// Staff Name
if ($("#sname").val().trim() == "")
 {
 return "Insert Staff Name.";
 }
// Password
if ($("#spassword").val().trim() == "")
 {
 return "Insert Password.";
 }

// Email-------------------------------
if ($("#semail").val().trim() == "")
 {
 return "Insert Email.";
 }
 

// Tel-------------------------------
if ($("#stel").val().trim() == "")
 {
 return "Insert Tel.";
 }
 
 
 // Salary-------------------------------
if ($("#salary").val().trim() == "")
 {
 return "Insert Salary.";
 }
 

// Department------------------------
if ($("#department").val().trim() == "")
 {
 return "Insert Department.";
 }
return true;
}