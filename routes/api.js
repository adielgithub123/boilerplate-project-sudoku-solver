'use strict';

const SudokuSolver = require('../controllers/sudoku-solver.js');

module.exports = function (app) {
  
  let solver = new SudokuSolver();

  app.route('/api/check')
    .post((req, res) => {
      const puzzle = req.body.puzzle || "";
      const coordinate = req.body.coordinate || "";
      const value = req.body.value || "";
      if(puzzle=="" || coordinate=="" || value==""){
        res.send({
          "error": "Required field(s) missing"
        })
      }
      else{
        const isValidated = solver.validate(puzzle);
        if(isValidated!==true){
          res.send(isValidated)
        }
        else{
          const coor = coordinate.split('');
          if(coor.length!=2){
            res.send({
              "error": "Invalid coordinate"
            })
          }
          else{
            const isValidRowValue = solver.checkRowPlacement(puzzleString,coor[0],coor[1],value);
            const isValidColValue = solver.checkColPlacement(puzzleString,coor[0],coor[1],value);
            const isValidRegionValue = solver.checkRegionPlacement(puzzleString,coor[0],coor[1],value);
            // if(isVal)
          }
        }
      }
    });
    
  app.route('/api/solve')
    .post((req, res) => {

    });
};
