$(function() {
    $(".devour").on("click", function(event) {
      const id = $(this).data("id");
      const newEatState = {
        devoured: 1
      }
      $.ajax(`/api/burgers/${id}`, {
        type: "PUT",
        data: newEatState
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
      const newBurger = {
        name: $("#burger_name").val().trim(),
        devoured: 0
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
    $(".delete").on("click", function(event) {
      const id = $(this).data("id");
      
      $.ajax("/api/burgers/" + id, {
        type: "DELETE",
      }).then(
        function() {
          console.log("cleaned up", id);
          location.reload();
        }
      );
    });
  });
  