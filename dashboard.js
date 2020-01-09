var tableData = [
    {id:1, name:"Billy Bob", age:"12", gender:"male", dob:"22/09/2000", lastAppointment:"23/07/2007", progress: 55, rating: 2},
    {id:2, name:"Mary May", age:"3", gender:"female", dob:"12/05/2016", lastAppointment:"07/01/2019", progress: 11, rating: 1},
    {id:3, name:"Janice Jones", age:"17", gender:"female", dob:"3/15/2002", lastAppointment:"11/01/2019", progress: 68, rating: 4.5},
    {id:4, name:"Fanny Li", age:"43", gender:"female", dob:"01/03/1970", lastAppointment:"27/04/2018", progress: 74, rating: 4},
    {id:5, name:"Daniel Dond", age:"61", gender:"male", dob:"10/09/1952", lastAppointment:"18/08/2010", progress: 82, rating: 3},
    {id:6, name:"Lester Puton", age:"33", gender:"male", dob:"15/12/1982", lastAppointment:"09/10/2014", progress: 96, rating: 2},
    {id:7, name:"Sally Tublen", age:"23", gender:"female", dob:"08/07/1993", lastAppointment:"15/09/2005", progress: 24, rating: 2.5},
    {id:8, name:"Gary Young", age:"14", gender:"male", dob:"05/05/2005", lastAppointment:"22/06/2018", progress: 60, rating: 5},
    {id:9, name:"Nick Han", age:"55", gender:"male", dob:"25/03/1963", lastAppointment:"21/12/2012", progress: 46, rating: 4.7},
    {id:10, name:"Rhonda Jekins", age:"71", gender:"female", dob:"17/08/1940", lastAppointment:"28/11/2017", progress: 87, rating: 3.2},
    {id:11, name:"Elle Develoir", age:"25", gender:"female", dob:"21/10/1991", lastAppointment:"05/09/2015", progress: 99, rating: 4},
    {id:12, name:"Joshua Hunt", age:"30", gender:"male", dob:"14/12/1980", lastAppointment:"18/09/2018", progress: 79, rating: 4.8},
    {id:13, name:"Macy Chiu", age:"45", gender:"female", dob:"11/05/1977", lastAppointment:"11/12/2002", progress: 63, rating: 1.1},
    {id:14, name:"Linda Poulin", age:"11", gender:"female", dob:"31/01/2008", lastAppointment:"29/11/2018", progress: 28, rating: 2.8},
    {id:15, name:"Tracy O'Conner", age:"6", gender:"female", dob:"24/07/2013", lastAppointment:"27/02/2014", progress: 49, rating: 3.1},
    {id:16, name:"Todd James", age:"20", gender:"male", dob:"25/03/1999", lastAppointment:"24/10/2015", progress: 82, rating: 4.2},]

var table = new Tabulator("#example-table", {
    data:tableData,
    height:"500px",
     responsiveLayout:"hide",
    layout:"fitColumns", //set initial table data
    columns:[
        {title:"Name", field:"name", headerFilter:"input", formatter:"link",  formatterParams:{url:"https://drive.google.com/file/d/1dDpQcqtdxIwlKjgirqUnCn1r486Of8lC/view?usp=sharing"}},
        {title:"Age", field:"age"},
        {title:"Gender", field:"gender"},
        {title:"Date Of Birth", field:"dob"},
        {title:"Last Appointment", field: "lastAppointment" },
        {title:"Progress", field:"progress", sorter:"number", align:"left", formatter:"progress",  editable:true},
        {title:"Rating", field:"rating",  formatter:"star", align:"center"},
    ],
});
