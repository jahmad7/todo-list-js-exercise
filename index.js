// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description = "new task") {
  const task = {
    title,
    status: false,
    description,

    show: function() {
      console.log(`task: ${this.title} \n description: ${this.description} \n Status: ${this.status ? " " : "Not "}completed`);
    },

    complete: function() {
      this.status = true;
    }
  }
  return task;
}


// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Zola likes a clean place"); // task 0
const task2 = newTask("Do Laundry"); // task 1
const tasks = [task1, task2];


task1.show();
task2.complete();
task2.show();
