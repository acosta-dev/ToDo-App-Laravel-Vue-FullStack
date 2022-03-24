<template>
    <div>
        <div id="heading">
            <h3 id="heading"> To Do - Tasks List</h3>
        </div>


<div class="row" id="toolbar">
    <div class="col-sm">
        <button type="button" class="btn btn-primary" @click="$router.push('Add_task')"><i class="fa fa-plus"></i> &nbsp; New Task</button>    
    </div>
    <div class="col-sm">
    </div>
    <div class="col-sm">
    </div>
    <div class="col-sm">
        <input class="form-control me-sm-2" width=100 type="text" placeholder="Filter">
    </div>
</div>   
       


<table class="table text-center">
  <thead>
    <tr>
      <th scope="col" width=5>Status</th>
      <th scope="col" >Title</th>
      <th scope="col">Description</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr class="table-primary text-center">
       <td> <span class="badge bg-warning">PENDING</span></td>
     
      <td>Some Task</td>
      <td>description</td>
      <td><button type="button" class="btn btn-success btn-sm"  data-toggle="tooltip" data-placement="top" title="Complete task!"><i class="fa fa-check"></i></button> &nbsp;
          <button type="button" class="btn btn-warning btn-sm"><i class="fa fa-edit" data-placement="top" title="Edit task"></i></button> &nbsp;
          <button type="button" class="btn btn-danger btn-sm"><i class="fa fa-trash" data-placement="top" title="Delete task"></i></button>
    </td>
    </tr>

    <tr class="table-primary">
      <td> <span class="badge bg-success">COMPLETED</span></td>
      <td>Some Task</td>
      <td>description</td>
      <td>
          <button type="button" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
    </td>
    </tr>
   
  </tbody>
</table>


    </div>
</template>
<style>
th, td {
    text-align: center;
    vertical-align: middle;
}
#heading{
    margin-bottom: 40px;
}
#heading{
text-align: center;
}
#toolbar{
    margin-bottom: 10px;
}
</style>
<script>
export default ({
    name:'TasksList'
})
</script>