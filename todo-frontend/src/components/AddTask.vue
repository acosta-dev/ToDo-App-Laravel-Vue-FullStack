<template>
    
<div class="form">
    <h3>Add New Task</h3>
<form>
  
    <div class="form-group">
      <label for="exampleInputEmail1" class="form-label mt-4"></label>
      <input type="email" class="form-control" width=500 id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Title of the task">
      
    </div>
    <div class="form-group">
      <label for="exampleTextarea" class="form-label mt-4"></label>
      <textarea class="form-control" id="exampleTextarea" placeholder="Description of the task" rows="3"></textarea>
    </div>

   <div class="form-group" id="sbm">
       
    <button type="button" class="btn btn-primary" @click="$router.push('/')" data-toggle="tooltip" data-placement="top" title="Back to all tasks list"><i class="fa fa-arrow-circle-o-left"></i> &nbsp; BACK</button>&nbsp;
  
    <button type="submit" class="btn btn-success" style="float: right;" data-toggle="tooltip" data-placement="top" title="Save task"><i class="fa fa-save"></i>&nbsp;Save</button>
    
   </div>

    
   
    

</form>
</div>

</template>

<style>
#sbm{
    margin-top: 10px;
}
div.form
{
    display: block;
    text-align: center;
}
form
{
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    width: 50%;
}
</style>

<script>
export default ({
     name:'AddTask'
})
</script>