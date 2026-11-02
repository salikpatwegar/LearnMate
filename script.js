const syllabusData = {
  "c-language": {
    name: "C Language",
    levels: {
      beginner: {
        label: "Beginner", description: "Build your programming foundations.", topics: ["Introduction to C and program structure", "Variables, constants, and data types", "Input/output using printf() and scanf()", "Operators and expressions", "if, if-else, and switch", "for, while, and do-while loops"],
        lesson: { title: "C Language: Beginner Foundations", intro: "Start with the structure of a C program and the building blocks used in simple programs.", conceptTitle: "What you will learn", concept: "A C program commonly starts execution in main(). Include header files when you need library functions. Variables store values, data types describe those values, and statements usually end with a semicolon. Conditions make decisions and loops repeat instructions.", exampleTitle: "Example", example: "#include <stdio.h>\nint main(void) {\n  int age = 18;\n  printf(\"Age: %d\\n\", age);\n  return 0;\n}", terms: ["int: a type commonly used for whole numbers.", "printf(): displays formatted output.", "Loop: repeats a block of code while a condition allows it."], question: "Which data type is commonly used to store a whole number in C?", options: ["float", "int", "char", "double"], correct: 1, explanation: "int is commonly used for whole-number values." }
      },
      intermediate: {
        label: "Intermediate", description: "Work with reusable code and collections of data.", topics: ["Functions, parameters, and return values", "Arrays and strings", "Pointers and addresses", "Structures and unions", "Scope, storage classes, and recursion", "Header files and multi-file programs"],
        lesson: { title: "C Language: Intermediate Concepts", intro: "Learn how to divide programs into functions and work with groups of related values.", conceptTitle: "What you will learn", concept: "Functions make programs easier to organize and reuse. Arrays store multiple values of the same type, strings are character arrays terminated by '\\0', and pointers store memory addresses. Structures group related fields under one type.", exampleTitle: "Example", example: "int add(int a, int b) {\n  return a + b;\n}\n// Calling add(2, 3) returns 5.", terms: ["Parameter: an input a function receives.", "Array: a sequence of elements of the same type.", "Pointer: a variable that stores a memory address."], question: "What does a C pointer store?", options: ["Only a decimal number", "A memory address", "A function result only", "A file name"], correct: 1, explanation: "A pointer stores a memory address, with its type indicating what kind of object it points to." }
      },
      advanced: {
        label: "Advanced", description: "Explore memory, files, and robust program design.", topics: ["Dynamic memory: malloc(), calloc(), realloc(), free()", "File handling with fopen(), fprintf(), and fclose()", "Function pointers and callbacks", "Bitwise operations and bit fields", "Preprocessor macros and conditional compilation", "Debugging, undefined behavior, and defensive coding"],
        lesson: { title: "C Language: Advanced Foundations", intro: "Explore features used to manage resources and build more robust C programs.", conceptTitle: "What you will learn", concept: "Dynamic memory lets a program request storage at runtime; allocated memory should be released when no longer needed. File functions open, read, write, and close files. Careful bounds checking and initialization help avoid undefined behavior and memory errors.", exampleTitle: "Example", example: "int *values = malloc(5 * sizeof *values);\nif (values != NULL) {\n  /* use values */\n  free(values);\n}", terms: ["Heap: memory commonly used for dynamic allocation.", "Memory leak: allocated memory that is no longer reachable to release.", "Undefined behavior: program behavior for which the C standard sets no requirements."], question: "Which function releases memory allocated with malloc()?", options: ["remove()", "free()", "close()", "clear()"], correct: 1, explanation: "free() releases dynamically allocated memory." }
      }
    }
  },
  dbms: {
    name: "DBMS",
    levels: {
      beginner: {
        label: "Beginner", description: "Understand the purpose and structure of databases.", topics: ["Database and DBMS fundamentals", "Tables, rows, columns, and records", "Primary keys and foreign keys", "Database users and basic architecture", "ER diagrams and entities", "Relational model basics"],
        lesson: { title: "DBMS: Beginner Foundations", intro: "A Database Management System helps people and applications store, organize, and retrieve data.", conceptTitle: "What you will learn", concept: "In a relational database, data is organized into tables. Rows represent records and columns represent attributes. A primary key uniquely identifies a row, while a foreign key helps establish a relationship between tables.", exampleTitle: "Real-world example", example: "A college database may have a Students table with student_id, name, and course columns. The student_id can be the primary key for each student record.", terms: ["DBMS: software for managing databases.", "Primary key: uniquely identifies each row.", "Entity: a person, place, thing, or concept represented in data."], question: "What is the main purpose of a primary key?", options: ["Uniquely identify a row", "Sort all rows alphabetically", "Encrypt a database", "Make a backup automatically"], correct: 0, explanation: "A primary key uniquely identifies each row in a table." }
      },
      intermediate: {
        label: "Intermediate", description: "Design relational databases and maintain data quality.", topics: ["ER-to-relational schema mapping", "Functional dependencies", "Normalization: 1NF, 2NF, and 3NF", "Relational algebra basics", "Integrity constraints", "Transactions and ACID properties"],
        lesson: { title: "DBMS: Intermediate Concepts", intro: "Learn how database design reduces duplication and helps keep data consistent.", conceptTitle: "What you will learn", concept: "Normalization organizes tables to reduce avoidable redundancy and update anomalies. Transactions group database operations into a logical unit. ACID stands for atomicity, consistency, isolation, and durability.", exampleTitle: "Real-world example", example: "Instead of repeating a department's details in every student row, store departments in a separate Department table and refer to them using a department_id.", terms: ["Normalization: organizing tables to reduce redundancy.", "Functional dependency: a relationship where one attribute determines another.", "Transaction: a logical unit of database work."], question: "What does the A in ACID stand for?", options: ["Availability", "Atomicity", "Accuracy", "Authorization"], correct: 1, explanation: "Atomicity means a transaction is treated as all-or-nothing." }
      },
      advanced: {
        label: "Advanced", description: "Explore performance, concurrency, and recovery.", topics: ["Indexing and query execution plans", "Concurrency control and locking", "Deadlocks and serializability", "Logging, checkpoints, and recovery", "Distributed databases and replication", "Database security and access control"],
        lesson: { title: "DBMS: Advanced Foundations", intro: "Explore how database systems protect correctness and perform well under demanding workloads.", conceptTitle: "What you will learn", concept: "Indexes can speed up data retrieval but add storage and write overhead. Concurrency control coordinates simultaneous transactions. Recovery mechanisms use logs and checkpoints to help restore a consistent state after failures.", exampleTitle: "Real-world example", example: "An index on an order_id column can help a database find a specific order without scanning every row, depending on the query and execution plan.", terms: ["Index: a data structure that can speed up lookups.", "Serializability: a correctness property for concurrent transactions.", "Replication: keeping copies of data on multiple systems."], question: "What is a common trade-off of adding an index?", options: ["It removes the need for backups", "It can speed reads but add storage and write overhead", "It guarantees every query is faster", "It prevents all deadlocks"], correct: 1, explanation: "Indexes often improve some reads but consume storage and can make writes more expensive." }
      }
    }
  },
  sql: {
    name: "SQL",
    levels: {
      beginner: {
        label: "Beginner", description: "Write your first queries and manage simple data.", topics: ["SQL and relational database basics", "SELECT and FROM", "Filtering with WHERE", "Sorting with ORDER BY", "INSERT, UPDATE, and DELETE", "NULL values and simple conditions"],
        lesson: { title: "SQL: Beginner Foundations", intro: "SQL is used to retrieve and manage data in relational databases.", conceptTitle: "What you will learn", concept: "SELECT names the columns to return, FROM names the table, and WHERE filters rows. ORDER BY sorts results. INSERT adds rows, UPDATE changes rows, and DELETE removes rows, so use conditions carefully when modifying data.", exampleTitle: "Example", example: "SELECT name\nFROM Students\nWHERE course = 'IT'\nORDER BY name;", terms: ["SELECT: chooses columns to return.", "WHERE: filters rows using a condition.", "ORDER BY: sorts the result set."], question: "Which SQL clause specifies the table to query?", options: ["ORDER BY", "WHERE", "FROM", "VALUES"], correct: 2, explanation: "FROM specifies the table used by a query." }
      },
      intermediate: {
        label: "Intermediate", description: "Combine tables and summarize results.", topics: ["Aggregate functions: COUNT, SUM, AVG, MIN, MAX", "GROUP BY and HAVING", "INNER JOIN and OUTER JOIN", "Subqueries and correlated subqueries", "CASE expressions and aliases", "Views and constraints"],
        lesson: { title: "SQL: Intermediate Queries", intro: "Use joins and aggregate functions to answer more useful questions about data.", conceptTitle: "What you will learn", concept: "JOIN combines related rows from tables. GROUP BY creates groups for aggregate calculations, while HAVING filters groups after aggregation. WHERE filters rows before grouping. A subquery is a query nested inside another SQL statement.", exampleTitle: "Example", example: "SELECT department_id, COUNT(*) AS student_count\nFROM Students\nGROUP BY department_id\nHAVING COUNT(*) > 10;", terms: ["JOIN: combines rows from related tables.", "Aggregate function: calculates a value from multiple rows.", "HAVING: filters grouped results."], question: "Which clause filters groups after GROUP BY?", options: ["WHERE", "HAVING", "FROM", "INSERT"], correct: 1, explanation: "HAVING filters groups, often using aggregate conditions." }
      },
      advanced: {
        label: "Advanced", description: "Write analytical queries and improve performance.", topics: ["Common table expressions (CTEs)", "Window functions and OVER()", "Set operators: UNION, INTERSECT, EXCEPT", "Transactions and isolation levels", "Indexes and query optimization", "Stored procedures, triggers, and parameterized queries"],
        lesson: { title: "SQL: Advanced Foundations", intro: "Explore SQL features used for analytics, reusable query logic, and performance tuning.", conceptTitle: "What you will learn", concept: "Window functions calculate values across related rows without collapsing them into one row per group. CTEs name a query expression for use within a statement. Query plans and indexes can help diagnose and improve performance. Parameterized queries help protect applications from SQL injection.", exampleTitle: "Example", example: "SELECT name, score,\n       RANK() OVER (ORDER BY score DESC) AS score_rank\nFROM Results;", terms: ["CTE: a named query expression introduced with WITH.", "Window function: computes across a window of related rows.", "SQL injection: an attack caused by unsafe handling of query input."], question: "What is a key benefit of parameterized queries?", options: ["They always make queries shorter", "They help separate data values from SQL code", "They remove the need for permissions", "They automatically create indexes"], correct: 1, explanation: "Parameterized queries separate user-supplied values from SQL code, helping prevent SQL injection." }
      }
    }
  }
};

const subjectGrid = document.getElementById("subjectGrid");
const searchInput = document.getElementById("searchInput");
const searchForm = document.getElementById("searchForm");
const emptyState = document.getElementById("emptyState");
const resultCount = document.getElementById("resultCount");
const lessonDialog = document.getElementById("lessonDialog");
const lessonContent = document.getElementById("lessonContent");
const lessonCategory = document.getElementById("lessonCategory");
const toast = document.getElementById("toast");
const STORAGE_KEY = "learnmate-progress-v2";
let progress = loadProgress();
let toastTimer;
let activeSubject = null;

function loadProgress() {
  try { const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); return stored && typeof stored === "object" ? stored : {}; }
  catch { return {}; }
}
function saveProgress() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); }
  catch { showToast("Progress could not be saved in this browser."); }
  updateProgress();
}
function updateProgress() {
  const completed = Object.keys(progress).filter((key) => progress[key]?.completed).length;
  document.getElementById("completedCount").textContent = completed;
  document.getElementById("progressBar").style.width = `${Math.min(completed / 9 * 100, 100)}%`;
  document.getElementById("progressCaption").textContent = completed ? `${completed} of 9 level lessons completed. Keep going!` : "Start a lesson to make progress.";
}
function showToast(message) {
  toast.textContent = message; toast.classList.add("show"); clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}
function filterSubjects(query) {
  const normalized = query.trim().toLowerCase(); let visible = 0;
  subjectGrid.querySelectorAll(".subject-card").forEach((card) => {
    const matches = !normalized || card.dataset.search.toLowerCase().includes(normalized) || card.textContent.toLowerCase().includes(normalized);
    card.classList.toggle("hidden", !matches); if (matches) visible++;
  });
  emptyState.classList.toggle("hidden", visible > 0); resultCount.textContent = `${visible} subject${visible === 1 ? "" : "s"}`;
}
function openSubject(subjectKey) {
  const subject = syllabusData[subjectKey]; if (!subject) return;
  activeSubject = subjectKey;
  lessonCategory.textContent = `${subject.name.toUpperCase()} · SYLLABUS`;
  lessonContent.innerHTML = `
    <div class="lesson-body syllabus-view">
      <h2 id="lessonTitle">${subject.name} syllabus</h2>
      <p class="lesson-intro">Learn the lesson and play the subject game, then pass the level test to unlock the next level. You must complete levels in order.</p>
      <div class="level-grid">${Object.entries(subject.levels).map(([levelKey, level], index) => {
        const levelOrder = ["beginner", "intermediate", "advanced"];
        const progressKey = `${subjectKey}:${levelKey}`;
        const saved = progress[progressKey] || {};
        const unlocked = index === 0 || Boolean(progress[`${subjectKey}:${levelOrder[index - 1]}`]?.testPassed);
        const status = saved.testPassed ? "✓ Test passed" : unlocked ? (saved.completed ? "Lesson completed · Test pending" : "Unlocked") : "🔒 Pass the previous level test first";
        return `<section class="level-card level-${levelKey} ${unlocked ? "" : "level-locked"}">
          <span class="level-tag">${level.label}</span><h3>${level.label}</h3><p>${level.description}</p>
          <ol>${level.topics.map((topic) => `<li>${topic}</li>`).join("")}</ol>
          <p class="level-status">${status}</p>
          <button class="button level-start" type="button" data-level="${levelKey}" ${unlocked ? "" : "disabled"}>${saved.testPassed ? "Review " : "Start "}${level.label} <span>→</span></button>
        </section>`;
      }).join("")}</div>
    </div>`;
  lessonDialog.showModal();
  lessonContent.querySelectorAll("[data-level]").forEach((button) => button.addEventListener("click", () => openLevelLesson(subjectKey, button.dataset.level)));
}
function openLevelLesson(subjectKey, levelKey) {
  const subject = syllabusData[subjectKey]; const level = subject?.levels[levelKey]; if (!level) return;
  const levelOrder = ["beginner", "intermediate", "advanced"];
  const levelIndex = levelOrder.indexOf(levelKey);
  if (levelIndex > 0 && !progress[`${subjectKey}:${levelOrder[levelIndex - 1]}`]?.testPassed) {
    showToast("Pass the previous level test to unlock this level."); openSubject(subjectKey); return;
  }
  const lesson = level.lesson; const progressKey = `${subjectKey}:${levelKey}`; const saved = progress[progressKey] || {};
  const gamePlayed = Boolean(progress[`${subjectKey}:gamePlayed`]?.played);
  const testReady = Boolean(saved.completed && gamePlayed && !saved.testPassed);
  lessonCategory.textContent = `${subject.name.toUpperCase()} · ${level.label.toUpperCase()}`;
  lessonContent.innerHTML = `
    <div class="lesson-body">
      <button class="back-to-syllabus" type="button" id="backToSyllabus">← Back to ${subject.name} syllabus</button>
      <h2 id="lessonTitle">${lesson.title}</h2><p class="lesson-intro">${lesson.intro}</p>
      <section class="lesson-block"><h3>${lesson.conceptTitle}</h3><p>${lesson.concept}</p></section>
      <section class="lesson-block lesson-example"><h3>${lesson.exampleTitle}</h3><pre class="code-example"></pre></section>
      <section class="lesson-block"><h3>Key terms to remember</h3><ul>${lesson.terms.map((term) => `<li>${term}</li>`).join("")}</ul></section>
      <h3 class="topic-list-title">${level.label} syllabus topics</h3><ol class="lesson-topic-list">${level.topics.map((topic) => `<li>${topic}</li>`).join("")}</ol>
      ${subjectKey === "c-language" && levelKey === "beginner" ? `<section class="practical-lab-card"><div class="lab-kicker">REAL-WORLD CODING MISSION</div><h3>🛒 Mini Shop: Variables in Action</h3><p>Use <code>int</code> for the quantity and <code>float</code> for the price. Change the values, run the mission, and see how the C program calculates a bill.</p><button class="button" type="button" id="openPracticalLab">Start practical lab →</button><div id="practicalLabMount"></div></section>` : ""}
      <div class="quiz-question">${lesson.question}</div>
      <div class="quiz-options">${lesson.options.map((option, index) => `<button type="button" class="quiz-option" data-answer="${index}"><span>${String.fromCharCode(65 + index)}.</span> ${option}</button>`).join("")}</div>
      <div class="quiz-feedback hidden" id="quizFeedback" role="status" aria-live="polite"></div>
      <div class="lesson-actions"><button class="button" type="button" id="markComplete">${saved.completed ? "✓ Lesson completed" : "Mark lesson complete"}</button><button class="button button-secondary" type="button" id="tryAgain">Try quiz again</button></div>
      <section class="level-test-gate"><h3>Level test</h3><p id="testRequirement">${saved.testPassed ? "You passed this level test! The next level is unlocked." : !saved.completed ? "Complete the lesson first." : !gamePlayed ? "Play the subject game before taking this test." : "You're ready! Take the test to unlock the next level."}</p><button class="button" type="button" id="startLevelTest" ${testReady ? "" : "disabled"}>${saved.testPassed ? "Test passed ✓" : "Take level test →"}</button></section>
    </div>`;
  lessonContent.querySelector(".code-example").textContent = lesson.example;
  document.getElementById("backToSyllabus").addEventListener("click", () => openSubject(subjectKey));
  const practicalLabButton = document.getElementById("openPracticalLab");
  if (practicalLabButton) practicalLabButton.addEventListener("click", renderPracticalLab);
  const answerButtons = [...lessonContent.querySelectorAll("[data-answer]")];
  answerButtons.forEach((button) => button.addEventListener("click", () => {
    answerButtons.forEach((item) => { item.classList.remove("correct", "incorrect"); item.disabled = true; });
    const selected = Number(button.dataset.answer); const isCorrect = selected === lesson.correct;
    button.classList.add(isCorrect ? "correct" : "incorrect"); answerButtons[lesson.correct].classList.add("correct");
    const feedback = document.getElementById("quizFeedback"); feedback.className = `quiz-feedback ${isCorrect ? "good" : "bad"}`;
    feedback.textContent = `${isCorrect ? "Correct!" : "Not quite."} ${lesson.explanation}`;
    progress[progressKey] = { ...(progress[progressKey] || {}), quizAnswered: true, quizCorrect: isCorrect }; saveProgress();
  }));
  document.getElementById("markComplete").addEventListener("click", () => {
    progress[progressKey] = { ...(progress[progressKey] || {}), completed: true }; saveProgress();
    document.getElementById("markComplete").textContent = "✓ Lesson completed";
    const ready = Boolean(progress[`${subjectKey}:gamePlayed`]?.played) && !progress[progressKey]?.testPassed;
    document.getElementById("testRequirement").textContent = progress[progressKey]?.testPassed ? "You passed this level test! The next level is unlocked." : ready ? "You're ready! Take the test to unlock the next level." : "Play the subject game before taking this test.";
    document.getElementById("startLevelTest").disabled = !ready;
    showToast("Lesson completed! Next, play the game and pass the level test.");
  });
  document.getElementById("startLevelTest").addEventListener("click", () => startLevelTest(subjectKey, levelKey));
  document.getElementById("tryAgain").addEventListener("click", () => openLevelLesson(subjectKey, levelKey));
}

function renderPracticalLab() {
  const mount = document.getElementById("practicalLabMount");
  if (!mount) return;
  mount.innerHTML = `
    <div class="practical-lab">
      <div class="lab-inputs">
        <label>Notebook quantity <input id="labQuantity" type="number" min="1" max="100" value="3"></label>
        <label>Price per notebook (₹) <input id="labPrice" type="number" min="0.01" max="100000" step="0.50" value="25.00"></label>
      </div>
      <p class="lab-hint">Try quantity 5 and price ₹12.50, then press Run Program.</p>
      <div class="lab-code-heading">Your C program <span>CODE PREVIEW</span></div>
      <pre class="code-example" id="labCode"></pre>
      <div class="lab-actions"><button class="button" type="button" id="runLabProgram">▶ Run program</button><button class="button button-outline" type="button" id="completeLab" disabled>Complete mission ✓</button></div>
      <div class="lab-output" aria-live="polite"><div class="lab-code-heading">Program output <span id="labRunStatus">NOT RUN YET</span></div><pre id="labOutput">Click “Run program” to see the output.</pre></div>
      <p class="lab-explanation" id="labExplanation">In C, variables store values. The expression <code>quantity * price</code> calculates the total bill.</p>
    </div>`;
  const quantityInput = document.getElementById("labQuantity");
  const priceInput = document.getElementById("labPrice");
  const code = document.getElementById("labCode");
  const output = document.getElementById("labOutput");
  const status = document.getElementById("labRunStatus");
  const runButton = document.getElementById("runLabProgram");
  const completeButton = document.getElementById("completeLab");
  const explanation = document.getElementById("labExplanation");
  function updateCode() {
    const quantity = Number.parseInt(quantityInput.value, 10);
    const price = Number.parseFloat(priceInput.value);
    const safeQuantity = Number.isFinite(quantity) && quantity >= 1 ? quantity : 3;
    const safePrice = Number.isFinite(price) && price >= 0.01 ? price : 25;
    code.textContent = `#include <stdio.h>\n\nint main(void) {\n    int quantity = ${safeQuantity};\n    float price = ${safePrice.toFixed(2)};\n    float total = quantity * price;\n\n    printf("Quantity: %d\\n", quantity);\n    printf("Price: ₹%.2f\\n", price);\n    printf("Total Bill: ₹%.2f\\n", total);\n    return 0;\n}`;
  }
  quantityInput.addEventListener("input", () => { updateCode(); completeButton.disabled = true; status.textContent = "READY TO RUN"; });
  priceInput.addEventListener("input", () => { updateCode(); completeButton.disabled = true; status.textContent = "READY TO RUN"; });
  updateCode();
  runButton.addEventListener("click", () => {
    const quantity = Number.parseInt(quantityInput.value, 10);
    const price = Number.parseFloat(priceInput.value);
    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 100 || !Number.isFinite(price) || price < 0.01 || price > 100000) {
      status.textContent = "INPUT ERROR"; output.textContent = "Please enter a quantity from 1–100 and a price from ₹0.01–₹100,000."; completeButton.disabled = true; return;
    }
    const total = quantity * price;
    output.textContent = `Quantity: ${quantity}\nPrice: ₹${price.toFixed(2)}\nTotal Bill: ₹${total.toFixed(2)}`;
    status.textContent = "PROGRAM RAN";
    explanation.innerHTML = `The program stored <code>${quantity}</code> in an <code>int</code>, stored <code>${price.toFixed(2)}</code> in a <code>float</code>, then multiplied them. The total is ₹${total.toFixed(2)}.`;
    completeButton.disabled = false;
  });
  completeButton.addEventListener("click", () => {
    const progressKey = "c-language:beginner";
    progress["c-language:practicalLab"] = { ...(progress["c-language:practicalLab"] || {}), completed: true };
    progress["c-language:gamePlayed"] = { ...(progress["c-language:gamePlayed"] || {}), played: true };
    saveProgress();
    completeButton.textContent = "✓ Mission completed";
    completeButton.disabled = true;
    showToast("Practical mission completed! You can now take the level test after finishing the lesson.");
    const saved = progress[progressKey] || {};
    const ready = Boolean(saved.completed && progress["c-language:gamePlayed"]?.played && !saved.testPassed);
    const requirement = document.getElementById("testRequirement");
    const testButton = document.getElementById("startLevelTest");
    if (requirement && testButton && saved.completed && !saved.testPassed) {
      requirement.textContent = ready ? "Great! Lesson and practical game complete. You are ready for the level test." : "Complete the lesson first, then take the level test.";
      testButton.disabled = !ready;
    }
  });
}

const levelTestBank = {
  "c-language": {
    beginner: [
      {q:"Which header is commonly included to use printf()?",options:["stdio.h","stdlib.h","string.h","math.h"],answer:0,why:"stdio.h declares standard input/output functions such as printf()."},
      {q:"Which operator checks whether two values are equal?",options:["=","==","!=","&&"],answer:1,why:"== compares two values; = assigns a value."},
      {q:"Which keyword begins a loop written in the form while (condition)?",options:["while","switch","typedef","struct"],answer:0,why:"The while keyword begins a loop whose condition is checked before each iteration."}
    ],
    intermediate: [
      {q:"What does a function's return statement do?",options:["Sends a value or control back to its caller","Creates an array","Declares a header file","Allocates every variable dynamically"],answer:0,why:"return ends the function and can provide a result to its caller."},
      {q:"In a typical C string, what marks the end?",options:["A space","The null character \0","A comma","The character 0 always"],answer:1,why:"C strings are terminated by the null character, written \0."},
      {q:"What does a pointer contain?",options:["A memory address","Only a decimal number","A loop condition","A header file"],answer:0,why:"A pointer stores an address of an object or function, depending on its type."}
    ],
    advanced: [
      {q:"Which function releases memory obtained from malloc()?",options:["free()","fclose()","remove()","scanf()"],answer:0,why:"free() releases dynamically allocated memory."},
      {q:"Which function is used to open a file in C?",options:["fopen()","openfile()","filein()","readfile()"],answer:0,why:"fopen() opens a file and returns a FILE pointer on success."},
      {q:"What is a memory leak?",options:["Allocated memory that is no longer properly reachable to release","A syntax error in a loop","A file opened in read mode","A variable declared as int"],answer:0,why:"A memory leak occurs when allocated memory is no longer reachable for release."}
    ]
  },
  dbms: {
    beginner: [
      {q:"In a relational table, what does a row usually represent?",options:["A record","A database server","A column heading","A query language"],answer:0,why:"Each row represents one record or tuple."},
      {q:"What does a primary key do?",options:["Uniquely identifies each row","Sorts rows automatically","Encrypts the table","Creates a backup"],answer:0,why:"A primary key uniquely identifies a row in its table."},
      {q:"What is a foreign key mainly used for?",options:["Representing a relationship between tables","Formatting a report","Compressing every row","Replacing all columns"],answer:0,why:"A foreign key references a key and helps maintain relationships between tables."}
    ],
    intermediate: [
      {q:"What is the main goal of normalization?",options:["Reduce redundancy and update anomalies","Make every table contain one row","Remove all keys","Disable transactions"],answer:0,why:"Normalization helps reduce unnecessary duplication and update anomalies."},
      {q:"What does atomicity mean in ACID?",options:["A transaction is all-or-nothing","All queries run alphabetically","Data is always duplicated","Every transaction is read-only"],answer:0,why:"Atomicity means all operations in a transaction succeed together or are rolled back."},
      {q:"A functional dependency X → Y means…",options:["X determines Y","Y always deletes X","X and Y must be identical","X is always a foreign key"],answer:0,why:"X determines Y when each X value corresponds to one Y value."}
    ],
    advanced: [
      {q:"What is a common benefit of a database index?",options:["Faster lookups for suitable queries","No need for backups","All writes become free","It prevents every deadlock"],answer:0,why:"Indexes can speed up some lookups but use storage and can add write overhead."},
      {q:"What is concurrency control designed to help manage?",options:["Simultaneous transactions","Font styles","Table names only","File extensions"],answer:0,why:"Concurrency control coordinates concurrent transactions to preserve correctness."},
      {q:"What is database replication?",options:["Maintaining copies of data across systems","Removing every index","Combining all columns","Converting SQL to C"],answer:0,why:"Replication keeps copies of data on multiple systems."}
    ]
  },
  sql: {
    beginner: [
      {q:"Which keyword chooses columns to return?",options:["SELECT","WHERE","ORDER BY","VALUES"],answer:0,why:"SELECT specifies the columns or expressions to return."},
      {q:"Which clause filters individual rows?",options:["WHERE","GROUP BY","ORDER BY","FROM"],answer:0,why:"WHERE applies conditions to rows."},
      {q:"Which clause sorts query results?",options:["ORDER BY","HAVING","INSERT","SET"],answer:0,why:"ORDER BY sorts the returned rows."}
    ],
    intermediate: [
      {q:"Which clause filters grouped results after GROUP BY?",options:["HAVING","WHERE","FROM","VALUES"],answer:0,why:"HAVING filters groups, often using aggregate conditions."},
      {q:"Which JOIN returns rows that match the join condition in both tables?",options:["INNER JOIN","CROSS JOIN","FULL OUTER JOIN","LEFT JOIN including all left rows"],answer:0,why:"INNER JOIN returns rows that satisfy the join condition in both tables."},
      {q:"Which function counts rows?",options:["COUNT()","TOTALROWS()","ADD()","NUMBEROF()"],answer:0,why:"COUNT() returns the number of rows or non-NULL values depending on its argument."}
    ],
    advanced: [
      {q:"What does a window function do?",options:["Calculates across related rows without collapsing them into one row per group","Deletes all rows in a table","Always creates a new table","Only sorts column names"],answer:0,why:"Window functions calculate over related rows while retaining individual result rows."},
      {q:"What is a CTE commonly introduced with?",options:["WITH","BEGIN TABLE","MAKE QUERY","DEFINE ROW"],answer:0,why:"A common table expression is introduced using WITH."},
      {q:"Why use parameterized queries?",options:["To separate input values from SQL code and help prevent SQL injection","To remove the need for database permissions","To guarantee every query is faster","To automatically create backups"],answer:0,why:"Parameterized queries separate values from SQL code and help protect against SQL injection."}
    ]
  }
};
let activeTest = null;
let testQuestionIndex = 0;
let testCorrect = 0;
let testAnswered = false;
function startLevelTest(subjectKey, levelKey) {
  const key = `${subjectKey}:${levelKey}`;
  if (!progress[key]?.completed || !progress[`${subjectKey}:gamePlayed`]?.played) {
    showToast("Complete the lesson and play the game before the test."); return;
  }
  activeTest = {subjectKey, levelKey}; testQuestionIndex = 0; testCorrect = 0; testAnswered = false;
  renderLevelTest();
}
function renderLevelTest() {
  const {subjectKey, levelKey} = activeTest;
  const subject = syllabusData[subjectKey]; const level = subject.levels[levelKey];
  const questions = levelTestBank[subjectKey][levelKey]; const item = questions[testQuestionIndex];
  lessonCategory.textContent = `${subject.name.toUpperCase()} · ${level.label.toUpperCase()} TEST`;
  if (!item) {
    const passed = testCorrect >= 2;
    const key = `${subjectKey}:${levelKey}`;
    progress[key] = {...(progress[key] || {}), testScore: testCorrect, testPassed: passed || Boolean(progress[key]?.testPassed)};
    saveProgress();
    lessonContent.innerHTML = `<div class="lesson-body game-score-panel"><div class="game-art" style="margin:0 auto 16px">${passed ? "🏆" : "📘"}</div><h2 id="lessonTitle">${passed ? "Level unlocked!" : "Keep practising"}</h2><div class="game-score-number">${testCorrect}/3</div><p>${passed ? `You passed the ${level.label} test. ${levelKey === "advanced" ? "You have completed all levels for this subject!" : "The next level is now unlocked."}` : "You need at least 2 correct answers out of 3 to pass. Review the lesson and try again."}</p><div class="game-actions"><button class="button" type="button" id="testDone">${passed ? "Continue →" : "Review lesson"}</button><button class="button button-secondary" type="button" id="retakeTest">Retake test</button></div></div>`;
    document.getElementById("testDone").addEventListener("click", () => passed ? openSubject(subjectKey) : openLevelLesson(subjectKey, levelKey));
    document.getElementById("retakeTest").addEventListener("click", () => startLevelTest(subjectKey, levelKey));
    return;
  }
  testAnswered = false;
  lessonContent.innerHTML = `<div class="lesson-body"><div class="game-progress"><span>Test question ${testQuestionIndex + 1} of ${questions.length}</span><strong>Score: ${testCorrect}</strong></div><div class="game-progress-track"><span style="width:${testQuestionIndex / questions.length * 100}%"></span></div><h2 id="lessonTitle">${subject.name} — ${level.label} test</h2><p class="lesson-intro">Pass with at least 2 correct answers out of 3 to unlock the next level.</p><p class="game-question">${item.q}</p><div class="game-options">${item.options.map((option,index) => `<button class="game-answer" type="button" data-test-answer="${index}"><strong>${String.fromCharCode(65 + index)}.</strong> ${option}</button>`).join("")}</div><div class="game-feedback hidden" id="testFeedback" role="status" aria-live="polite"></div><div class="game-actions"><button class="button hidden" type="button" id="nextTestQuestion">${testQuestionIndex === questions.length - 1 ? "See results" : "Next question →"}</button><button class="button button-secondary" type="button" id="quitTest">Exit test</button></div></div>`;
  const buttons = [...lessonContent.querySelectorAll("[data-test-answer]")];
  buttons.forEach(button => button.addEventListener("click", () => {
    if (testAnswered) return; testAnswered = true;
    const selected = Number(button.dataset.testAnswer); const correct = selected === item.answer; if (correct) testCorrect++;
    buttons.forEach((b,i) => { b.disabled = true; if (i === item.answer) b.classList.add("correct"); else if (i === selected) b.classList.add("incorrect"); });
    const feedback = document.getElementById("testFeedback"); feedback.className = `game-feedback ${correct ? "good" : "bad"}`; feedback.textContent = `${correct ? "Correct! " : "Not quite. "}${item.why}`;
    lessonContent.querySelector(".game-progress strong").textContent = `Score: ${testCorrect}`;
    document.getElementById("nextTestQuestion").classList.remove("hidden");
  }));
  document.getElementById("nextTestQuestion").addEventListener("click", () => { testQuestionIndex++; renderLevelTest(); });
  document.getElementById("quitTest").addEventListener("click", () => openLevelLesson(subjectKey, levelKey));
}

const gameQuestionBank = {
  "c-language": [
    {q:"Which function is the usual entry point of a C program?", options:["start()","main()","run()","init()"], answer:1, why:"Execution of a hosted C program begins at main()."},
    {q:"Which format specifier is commonly used with printf() to display an int?", options:["%c","%f","%d","%s"], answer:2, why:"%d is commonly used to display an integer value."},
    {q:"What does a for loop help a program do?", options:["Repeat instructions","Create a database","Declare a header file","End every function"], answer:0, why:"A for loop repeats a statement or block while its loop condition permits."},
    {q:"What does a pointer store?", options:["A memory address","Only a word","A database table","Always a decimal value"], answer:0, why:"A pointer stores an address of an object or function, depending on its type."},
    {q:"Which function releases memory allocated by malloc()?", options:["delete()","free()","remove()","clear()"], answer:1, why:"free() releases dynamically allocated memory."},
    {q:"Which type is commonly used for a single character?", options:["char","double","void","struct"], answer:0, why:"char is the character type in C."}
  ],
  dbms: [
    {q:"What is the main purpose of a DBMS?", options:["Manage and organize data","Design posters","Compile C code only","Browse websites"], answer:0, why:"A DBMS provides tools to store, organize, retrieve, and manage data."},
    {q:"What uniquely identifies each row in a table?", options:["Foreign key","Primary key","Duplicate field","View"], answer:1, why:"A primary key uniquely identifies each row in its table."},
    {q:"A foreign key is mainly used to…", options:["Connect related tables","Encrypt every column","Sort all rows automatically","Delete duplicate databases"], answer:0, why:"A foreign key references a key in another or the same table to represent a relationship."},
    {q:"What does normalization aim to reduce?", options:["Data redundancy and anomalies","All database security","The need for tables","Every query"], answer:0, why:"Normalization organizes data to reduce unnecessary duplication and update anomalies."},
    {q:"What does the A in ACID stand for?", options:["Availability","Atomicity","Accuracy","Authorization"], answer:1, why:"Atomicity means a transaction is treated as all-or-nothing."},
    {q:"What is a database index commonly used for?", options:["Speeding up some data lookups","Replacing all backups","Guaranteeing every write is faster","Removing primary keys"], answer:0, why:"Indexes can improve lookup speed, though they also use storage and can add write overhead."}
  ],
  sql: [
    {q:"Which SQL keyword selects columns to return?", options:["SELECT","WHERE","ORDER","VALUES"], answer:0, why:"SELECT names the columns or expressions to return."},
    {q:"Which clause specifies the table being queried?", options:["GROUP BY","FROM","HAVING","SET"], answer:1, why:"FROM identifies the table or data source used by the query."},
    {q:"Which clause filters individual rows?", options:["WHERE","ORDER BY","SELECT","CREATE"], answer:0, why:"WHERE applies a condition to rows before the final result is returned."},
    {q:"Which clause sorts query results?", options:["SORT","ORDER BY","ARRANGE","GROUP"], answer:1, why:"ORDER BY sorts the returned rows by specified expressions."},
    {q:"Which SQL clause filters groups after aggregation?", options:["WHERE","FROM","HAVING","VALUES"], answer:2, why:"HAVING filters groups, often by using aggregate conditions."},
    {q:"Which JOIN returns rows with matching values in both tables?", options:["INNER JOIN","CROSS JOIN","FULL OUTER JOIN","No JOIN"], answer:0, why:"INNER JOIN returns rows that satisfy the join condition in both tables."}
  ]
};
let activeGame = null;
let gameRound = 0;
let gameScore = 0;
let gameQuestions = [];
let gameLocked = false;
const GAME_SCORE_KEY = "learnmate-game-best-v1";
function getBestGameScore() { try { return Number(localStorage.getItem(GAME_SCORE_KEY) || 0); } catch { return 0; } }
function updateBestGameScore(score) { try { localStorage.setItem(GAME_SCORE_KEY, String(Math.max(score, getBestGameScore()))); } catch {} document.getElementById("gameBestScore").textContent = `Best score: ${getBestGameScore()}`; }
function shuffleQuestions(items) { return [...items].sort(() => Math.random() - 0.5).slice(0, 5); }
function openGame(subjectKey) {
  const subject = syllabusData[subjectKey]; if (!subject || !gameQuestionBank[subjectKey]) return;
  activeGame = subjectKey; gameRound = 0; gameScore = 0; gameQuestions = shuffleQuestions(gameQuestionBank[subjectKey]); gameLocked = false;
  renderGameQuestion(); lessonDialog.showModal();
}
function renderGameQuestion() {
  const subject = syllabusData[activeGame]; const item = gameQuestions[gameRound];
  lessonCategory.textContent = `LEARN & PLAY · ${subject.name.toUpperCase()}`;
  if (!item) {
    updateBestGameScore(gameScore);
    progress[`${activeGame}:gamePlayed`] = {played: true, bestScore: Math.max(gameScore, progress[`${activeGame}:gamePlayed`]?.bestScore || 0)}; saveProgress();
    lessonContent.innerHTML = `<div class="lesson-body game-score-panel"><div class="game-art" style="margin:0 auto 16px">🏆</div><h2 id="lessonTitle">Game complete!</h2><p class="lesson-intro">You finished ${subject.name} challenge.</p><div class="game-score-number">${gameScore}/50</div><p>You answered ${gameScore / 10} out of 5 questions correctly.</p><p>${gameScore >= 40 ? "Excellent work — you know these concepts well!" : gameScore >= 20 ? "Nice effort! Review the topics you missed and play again." : "Keep practicing. Every round helps you improve."}</p><div class="game-actions"><button class="button" type="button" id="playAgain">Play again</button><button class="button button-secondary" type="button" id="backGames">Back to games</button></div></div>`;
    document.getElementById("playAgain").addEventListener("click", () => openGame(activeGame));
    document.getElementById("backGames").addEventListener("click", () => { lessonDialog.close(); document.getElementById("learn-play").scrollIntoView({behavior:"smooth"}); });
    return;
  }
  gameLocked = false;
  lessonContent.innerHTML = `<div class="lesson-body"><div class="game-progress"><span>Question ${gameRound + 1} of 5</span><strong>Score: ${gameScore}</strong></div><div class="game-progress-track"><span style="width:${gameRound / 5 * 100}%"></span></div><h2 id="lessonTitle">${subject.name} challenge</h2><p class="game-question">${item.q}</p><div class="game-options">${item.options.map((option,index) => `<button class="game-answer" type="button" data-game-answer="${index}"><strong>${String.fromCharCode(65 + index)}.</strong> ${option}</button>`).join("")}</div><div class="game-feedback hidden" id="gameFeedback" role="status" aria-live="polite"></div><div class="game-actions"><button class="button hidden" type="button" id="nextGameQuestion">${gameRound === 4 ? "See results" : "Next question →"}</button><button class="button button-secondary" type="button" id="quitGame">Quit Quiz</button></div></div>`;
  const buttons = [...lessonContent.querySelectorAll("[data-game-answer]")];
  buttons.forEach(button => button.addEventListener("click", () => {
    if (gameLocked) return; gameLocked = true;
    const selected = Number(button.dataset.gameAnswer); const correct = selected === item.answer;
    if (correct) gameScore += 10;
    buttons.forEach((b,i) => { b.disabled = true; if (i === item.answer) b.classList.add("correct"); else if (i === selected) b.classList.add("incorrect"); });
    const feedback = document.getElementById("gameFeedback"); feedback.className = `game-feedback ${correct ? "good" : "bad"}`; feedback.textContent = `${correct ? "+10 points! " : "Not quite. "}${item.why}`;
    lessonContent.querySelector(".game-progress strong").textContent = `Score: ${gameScore}`;
    document.getElementById("nextGameQuestion").classList.remove("hidden");
  }));
  document.getElementById("nextGameQuestion").addEventListener("click", () => { gameRound++; renderGameQuestion(); });
  document.getElementById("quitGame").addEventListener("click", () => { lessonDialog.close(); showToast("Game paused. Come back and try again!"); });
}

searchForm.addEventListener("submit", (event) => { event.preventDefault(); filterSubjects(searchInput.value); document.getElementById("subjects").scrollIntoView({ behavior: "smooth" }); });
searchInput.addEventListener("input", () => filterSubjects(searchInput.value));
subjectGrid.addEventListener("click", (event) => { const button = event.target.closest("[data-subject]"); if (button) openSubject(button.dataset.subject); });
document.getElementById("closeLesson").addEventListener("click", () => lessonDialog.close());
document.querySelectorAll("[data-game]").forEach((button) => button.addEventListener("click", () => openGame(button.dataset.game)));
document.getElementById("gameBestScore").textContent = `Best score: ${getBestGameScore()}`;
lessonDialog.addEventListener("click", (event) => { if (event.target === lessonDialog) lessonDialog.close(); });
document.getElementById("continueLearning").addEventListener("click", () => document.getElementById("subjects").scrollIntoView({ behavior: "smooth" }));
document.getElementById("resetProgress").addEventListener("click", () => {
  if (confirm("Reset all LearnMate lesson progress saved in this browser?")) { progress = {}; saveProgress(); showToast("Your local learning progress has been reset."); }
});
document.getElementById("year").textContent = new Date().getFullYear();
updateProgress();
