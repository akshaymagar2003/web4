$(document).ready(function() {
  let integerArray = [];
let namedEntityArray = [];
  // Integer Array Functions
  const addInteger = (value) => {
    integerArray.push(value);
    updateIntegerList();
  };

  const sortIntegerArray = () => {
    integerArray.sort((a, b) => a - b);
    updateIntegerList();
  };

  const searchInteger = (value) => {
    const index = integerArray.indexOf(value);
    if (index !== -1) {
      alert(`Integer ${value} found at index ${index}`);
    } else {
      alert(`Integer ${value} not found!`);
    }
  };

  const updateIntegerList = () => {
    $("#integer-list").empty();
    integerArray.forEach((value) => {
      $("#integer-list").append(`<li class="list-group-item ">${value}</li>`);
    });
  };

  // Named Entity Array Functions
  const addEntity = (name) => {
    entityArray.push(name);
    updateEntityList();
  };

  const updateEntityList = () => {
    $("#entity-list").empty();
    entityArray.forEach((name) => {
      $("#entity-list").append(`<li class="list-group-item">${name}</li>`);
    });
  };
const addNamedEntity = (name) => {
    namedEntityArray.push(name);
    updateNamedEntityList();
  };

  const updateNamedEntityList = () => {
    $("#named-entity-list").empty();
    namedEntityArray.forEach((name) => {
      $("#named-entity-list").append(`<li class="list-group-item">${name}</li>`);
    });
  };
  $("#add-named-entity-btn").click(function() {
  const name = $("#named-entity-name").val();
  if (name) { // Check if name is not empty
    addNamedEntity(name);
    $("#named-entity-name").val(""); // Clear the input field
  } else {
    alert("Please enter a named entity!");
  }
});
  $("#add-int-btn").click(function() {
  const value = parseInt($("#int-to-add").val());
  if (!isNaN(value)) {
    addInteger(value);
    $("#int-to-add").val("");
   }
 });

  $("#sort-int-btn").click(function() {
    sortIntegerArray(); // Assuming this function exists
    updateIntegerList();
  });

  $("#search-int-btn").click(function() {
    const searchValue = parseInt($("#int-to-search").val());
    if (!isNaN(searchValue)) {
      searchInteger(searchValue); // Assuming this function exists
    } else {
      alert("Please enter a valid number to search!");
    }
  });
   const sortNamedEntities = () => {
    namedEntityArray.sort((a, b) => {
      return a.localeCompare(b);
    });
    updateNamedEntityList();
  };

  // Named Entity Searching
  const searchNamedEntities = (searchTerm) => {
    const results = namedEntityArray.filter(entity => entity.toLowerCase().includes(searchTerm.toLowerCase()));
    if (results.length > 0) {
      alert(`Found named entities: ${results.join(", ")}`);
    } else {
      alert(`No named entities found matching "${searchTerm}"`);
    }
  };
  $("#sort-named-entity-btn").click(function() {
    sortNamedEntities();
  });

  $("#search-named-entity-btn").click(function() {
    const searchTerm = $("#named-entity-search").val();
    if (searchTerm) {
      searchNamedEntities(searchTerm);
      $("#named-entity-search").val("");
    } else{
          alert(`Enter Search Query`);
    }
});
});
