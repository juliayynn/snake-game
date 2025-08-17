<!DOCTYPE html>
<html>
 <head>
   <title>Snake</title>
   <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
   <link rel="stylesheet" href="snake.css">
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
 </head>
 <body style="background-color:#fff7fb">
      
        <div class="py-3 d-flex justify-content-center">
            <div class="btn-group col-4 " role="group" >
              <input type="radio" class="btn-check" name="btnradio"  id="easy_level" autocomplete="off" checked>
              <label class="btn btn-outline-success" for="easy_level">Easy</label>
            
              <input type="radio" class="btn-check" name="btnradio" id="normal_level" autocomplete="off">
              <label class="btn btn-outline-warning" for="normal_level">Normal</label>
            
              <input type="radio" class="btn-check" name="btnradio" id="hard_level" autocomplete="off">
              <label class="btn btn-outline-danger" for="hard_level">Hard</label>
            </div>
        </div>
        
       <div class="hstack gap-2 justify-content-center"> 
           <div class="p-2 ">
                
                    <button id="button1" class="btn btn-success" >Начать игру</button>
            </div>
            <div class="p-2">
                    <button id="button2" class="btn btn-danger" >Пауза</button>
                    
             </div>   
             
        </div>
        <div class="d-flex justify-content-center">
            <div class=" col-4 wrapper shadow p-2 bg-body-tertiary rounded">
                <canvas id="canvas" width="400px" height="400px"></canvas>
            </div>
         </div>
        
  

 
  <script src="js/snake.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
 </body> 
</html>