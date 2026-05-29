/**
 * TdX Language Interactive Demonstration Dataset
 * Template configuration to add new combinations easily.
 */
 const tdxShowcaseData = [
    {
        topic: "Output System",
        description: "The basic output keyword uses <span class='highlight'>print:</span> or the shortcut <span class='highlight'>&gt;:</span> indicator. Every print line systematically appends a clean layout breakout sequence automatically.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-num'>456</span>\n<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Tahmid\"</span>\n<span class='tdx-keyword'>&gt;:</span> <span class='tdx-string'>\"Hello\"</span>",
        output: "• 456\n• Tahmid\n• Hello"
    },
    {
        topic: "Data Types: String Type Inspection",
        description: "Query type fields directly to extract internal variable details. String configurations report across standard text tags.",
        code: "name <span class='tdx-keyword'>:=</span> <span class='tdx-string'>\"Tahmid\"</span>\n<span class='tdx-keyword'>type-</span> name",
        output: "• [ type : 'str' ]"
    },
    {
        topic: "Hanging Markup Flags",
        description: "Open text formatting blocks that fail to explicitly close bracket fields cause document analysis leaks.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Hi\"</span> <span class='err-lbl'>[bold</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Punc-Error:</span> Missing terminal structural bracket on formatting flag.\n<span class='err-fix'>FiX:</span> Balance trailing layouts cleanly with matching closures.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Magic Tags: Right Alignment",
        description: "The positioning constraint tag <span class='highlight'>[right]</span> pushes the dynamic terminal string to initiate rendering on the right boundary side.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Target Text\"</span> <span class='tdx-tag'>[right]</span>",
        output: "                                                                 • Target Text"
    },
    {
        topic: "Shared Style Boundaries",
        description: "Assigning conflicting colors to the same character indexes triggers compilation overrides inside the core engine.",
        code: "<span class='err-lbl'>[c:M red 1-3, blue 2-5]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Color-Tag-Error:</span> Overlapping structural multi-color ranges detected.\n<span class='err-fix'>FiX:</span> Adjust boundaries to avoid overlapping style states.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Lists (ls): Boundary Verification",
        description: "Requesting indices that sit beyond the actual list size safely triggers structured lookup alerts across the engine.",
        code: "a <span class='tdx-keyword'>:=</span> <span class='tdx-tag'>[</span>1, 2<span class='tdx-tag'>]</span>\n<span class='tdx-keyword'>print:</span> <span class='err-lbl'>a[5]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Index-Overflow-Error:</span> Requested pointer position maps outside current container dimensions.\n<span class='err-line'>[LINE 2]</span>"
    },
    {
        topic: "Unassigned Gradient Direction",
        description: "Vector interpolation matrices demand structural angle specifications adjacent to pipe dividers.",
        code: "<span class='err-lbl'>[c: red, blue | ]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Color-Tag-Error:</span> Missing structural gradient angle configuration.\n<span class='err-fix'>FiX:</span> Define an angle value from 0 to 360.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Groups (grp): Hard Immutable Lists",
        description: "Groups handle structured collections that are ordered and support duplicate entries, but are completely immutable.",
        code: "t <span class='tdx-keyword'>:=</span> <span class='tdx-tag'>(</span>1, 2, 3, 2<span class='tdx-tag'>)</span>\n<span class='tdx-keyword'>print:</span> t[1]",
        output: "• 1"
    },
    {
        topic: "Missing Processing Operator",
        description: "Omission of the critical parameter binding colon breaks structural parsing pathways instantly.",
        code: "<span class='err-lbl'>print</span> <span class='tdx-string'>\"Hello\"</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Punc-Error:</span> TdX noticed <span class='err-bold'>no \":\"</span> in the code\n<span class='err-fix'>FiX:</span> Try only one \":\".\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Markdown Flags: Italic",
        description: "The property layout constraint token <span class='highlight'>[italic]</span> triggers immediate italicized formatting rendering transformations seamlessly.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Slanted\"</span> <span class='tdx-tag'>[italic]</span>",
        output: "• <i>Slanted</i>"
    },
    {
        topic: "Multi-Color Name Map Error",
        description: "Using color names that fall outside standard system dictionaries generates immediate lookup failures.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Test\"</span> <span class='err-lbl'>[c: ultra-green]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Color-Tag-Error:</span> TdX couldn't <span class='err-bold'>find \"ultra-green\"</span> Color Name.\n<span class='err-fix'>FiX:</span> Match parameters against certified system color titles.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Ranges (ran): Single Step Profiles",
        description: "When given a single integer value, the range engine automatically initializes tracking scales starting from index 1.",
        code: "r <span class='tdx-keyword'>:=</span> <span class='tdx-tag'>ran[</span>3<span class='tdx-tag'>]</span>\n<span class='tdx-keyword'>print:</span> <span class='tdx-keyword'>ls-</span> r",
        output: "• [1, 2, 3]"
    },
    {
        topic: "Case Capitalization Violations",
        description: "Core structural keywords mandate strict case conformity parameters; variance triggers immediate resolution indicators.",
        code: "<span class='err-lbl'>Print:</span> <span class='tdx-string'>\"Hello\"</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Case-Error:</span> TdX is case sensitive, even in keywords. Thus, TdX don't understood \"Print:\".\n<span class='err-fix'>FiX:</span> Try using \"print:\".\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Data Types: Decimal Profiles",
        description: "Fraction numbers auto-map into decimal slots, retaining accurate fractional dimensions cleanly.",
        code: "val <span class='tdx-keyword'>:=</span> <span class='tdx-num'>24.68</span>\n<span class='tdx-keyword'>type-</span> val",
        output: "• [ type : 'dec' ]"
    },
    {
        topic: "Double Bracket Wrap Faults",
        description: "Enclosing visual tracking definitions inside redundant brackets breaks inner variable extractions.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Hi\"</span> <span class='err-lbl'>[[bold]]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Punc-Error:</span> Double brackets block structural internal token evaluation.\n<span class='err-fix'>FiX:</span> Clean the code to pass single identifier arrays explicitly.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Size Controls: Level II Minimum",
        description: "The intermediate reduction modifier target flag <span class='highlight'>[smallII]</span> normalizes structural baseline scales downward directly.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Denser\"</span> <span class='tdx-tag'>[smallII]</span>",
        output: "• <span style='font-size: 0.75rem;'>Denser</span>"
    },
    {
        topic: "Overlapping Large Scales",
        description: "Declaring multiple separate text-enlarging tags over a single print run sets off scale errors in the layout manager.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Max\"</span> <span class='err-lbl'>[bigIII] [bigI]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Tag-Error:</span> Multiple big size parameters scaling targets simultaneously.\n<span class='err-fix'>FiX:</span> Keep a single, explicit text dimension modifier tag.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Unclosed Parameter Bracket",
        description: "Hanging property declarations lacking explicit termination symbols cause tracking stack breaks.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Hi\"</span> <span class='err-lbl'>[c: red</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Punc-Error:</span> TdX noticed a <span class='err-bold'>missing \"]\"</span> in the color tag.\n<span class='err-fix'>FiX:</span> Try adding one \"]\" at the last of the tag\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Stores (sto): Key-Value Pairs",
        description: "Stores handle structured reference sets by binding unique data keys directly to specific target values.",
        code: "student <span class='tdx-keyword'>:=</span> <span class='tdx-tag'>[</span>\n  <span class='tdx-string'>\"name\"</span> • <span class='tdx-string'>\"Tahmid\"</span>,\n  <span class='tdx-string'>\"age\"</span> • <span class='tdx-num'>17</span>\n<span class='tdx-tag'>]</span>",
        output: "<span class='tdx-comment'># Store mapped dictionary parsed successfully</span>"
    },
    {
        topic: "Unquoted Variable Reference Error",
        description: "Calling unallocated text parameters outside string literals triggers strict tracking alerts across the engine.",
        code: "<span class='tdx-keyword'>print:</span> <span class='err-lbl'>unquotedText</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Var-Error:</span> TdX cannot parse unknown variables outside active string structures.\n<span class='err-fix'>FiX:</span> Encapsulate with quote pairs or assign matching definitions.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Size Controls: Maximum Scale",
        description: "The specialized structural dimension constraint token <span class='highlight'>[bigIII]</span> scales text weights to largest terminal views natively.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Max\"</span> <span class='tdx-tag'>[bigIII]</span>",
        output: "• <span style='font-size: 2rem; font-weight: 900;'>Max</span>"
    },
    {
        topic: "Double-Bracket Structural Errors",
        description: "Wrapping style properties in extra, redundant brackets blocks inner token extraction routines.",
        code: "<span class='tdx-keyword'>&gt;:</span> <span class='tdx-string'>\"Fail\"</span> <span class='err-lbl'>[[italic]]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Punc-Error:</span> Double brackets block structural internal token evaluation.\n<span class='err-fix'>FiX:</span> Pass singular parameter layers explicitly.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Variable Rules: Case Priority",
        description: "A single lowercase character shifts a constant's status down to a standard updateable variable block.",
        code: "<span class='tdx-type'>MY_CONsT</span> <span class='tdx-keyword'>:=</span> <span class='tdx-num'>10</span>\nMY_CONsT <span class='tdx-keyword'>:=</span> <span class='tdx-num'>20</span>",
        output: "<span class='tdx-comment'># Variable re-allocation successfully executed</span>"
    },
    {
        topic: "Magic Tags: Multiple Color Mappings",
        description: "The multi-color tag flag <span class='highlight'>[c:M ...]</span> targets index range parameters inside character maps to layer multi-tonal fields.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"hello, guys\"</span> <span class='tdx-tag'>[c:M blue 1-5, red 8-11]</span>",
        output: "<span style='color:#81a1c1;'>hello</span>, <span style='color:#ff3333;'>guys</span>"
    },
    {
        topic: "Extraneous Symbol Injections",
        description: "Stray special characters matching no functional system keywords trigger lexical scanning validation blocks.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Hi\"</span> <span class='err-lbl'>@@@</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Lexical-Error:</span> Stray or unmapped sequence blocks isolated within compilation lane.\n<span class='err-fix'>FiX:</span> Remove unassigned character assets outside code strings.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Unregistered System Names",
        description: "Passing arbitrary color titles outside standard global color dictionaries triggers dictionary search errors.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Hi\"</span> <span class='err-lbl'>[c: superblue]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Color-Tag-Error:</span> TdX couldn't <span class='err-bold'>find \"superblue\"</span> Color Name.\n<span class='err-fix'>FiX:</span> Use a valid registered system color name.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Ranges (ran): Interval Step Increments",
        description: "Pass a third tracking parameter to control step intervals across growing numeric lists.",
        code: "r <span class='tdx-keyword'>:=</span> <span class='tdx-tag'>ran[</span>0 • 10 • 3<span class='tdx-tag'>]</span>\n<span class='tdx-keyword'>print:</span> <span class='tdx-keyword'>ls-</span> r",
        output: "• [0, 3, 6, 9]"
    },
    {
        topic: "Unclosed String Variant",
        description: "Single quote enclosures require strict symmetry maps; raw terminal sequences are caught during layout tests.",
        code: "<span class='tdx-keyword'>print:</span> <span class='err-lbl'>'Hello</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Punc-Error:</span> TdX noticed an <span class='err-bold'>unclosed [' ']</span> in the code\n<span class='err-fix'>FiX:</span> Try closing 'Hello'\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Model Syntax: Explicit Structuring",
        description: "The TdX Model configuration defines custom layout templates with absolute verification guidelines.",
        code: "User <span class='tdx-tag'>[.</span>\n  name <span class='tdx-tag'>[str]</span>,\n  age <span class='tdx-tag'>[int]</span>\n<span class='tdx-tag'>]</span>\n<span class='tdx-keyword'>type-</span> User.name",
        output: "• [ MD- User : 'str ']"
    },
    {
        topic: "Concurrent Backdrop Conflicts",
        description: "Declaring multiple independent context backdrops over single strings triggers state overwrite alerts.",
        code: "<span class='err-lbl'>[c:B red] [c:B blue]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Color-Tag-Error:</span> Multiple background declarations colliding.\n<span class='err-fix'>FiX:</span> Merge directives inside single multi-index layouts safely.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Markdown Flags: Superscript",
        description: "The system markup configuration value <span class='highlight'>[sup]</span> forces string layouts to elevate position vectors higher cleanly.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Power\"</span> <span class='tdx-tag'>[sup]</span>",
        output: "• <sup>Power</sup>"
    },
    {
        topic: "Multi-Scale Collision Risks",
        description: "Enforcing distinct oversized rendering targets simultaneously causes character layout scale failures.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Hi\"</span> <span class='err-lbl'>[bigI] [bigIII]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Tag-Error:</span> Multiple big size parameters scaling targets simultaneously.\n<span class='err-fix'>FiX:</span> Retain one specific structural dimension token flag.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Lists (ls): Mutation Controls",
        description: "Update elements safely within active collections by reassigning values to specific index slots.",
        code: "a <span class='tdx-keyword'>:=</span> <span class='tdx-tag'>[</span>10, 20, 30<span class='tdx-tag'>]</span>\na[1] <span class='tdx-keyword'>:=</span> <span class='tdx-num'>99</span>\n<span class='tdx-keyword'>print:</span> a[1]",
        output: "• 99"
    },
    {
        topic: "Output System: Alternate Operator",
        description: "The shortcut colon symbol <span class='highlight'>&gt;:</span> behaves identically to the keyword print sequence, processing trailing whitespace cleanly.",
        code: "<span class='tdx-keyword'>&gt;:</span> <span class='tdx-string'>\"Hello World\"</span>",
        output: "• Hello World"
    },
    {
        topic: "ImmuteSet (ist): Structural Safety",
        description: "Immutable collection properties block external insertion loops, keeping system operations safe and fast.",
        code: "f <span class='tdx-keyword'>:=</span> <span class='tdx-tag'>{.</span>1, 2<span class='tdx-tag'>}</span>\n<span class='err-lbl'>f.add(3)</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Collection-Lock-Error:</span> Attempted modification on an active fixed ImmuteSet collection pipeline.\n<span class='err-line'>[LINE 2]</span>"
    },
    {
        topic: "Inverted Vector Sequences",
        description: "Declaring terminal index parameters that precede initiation boundaries violates data mapping rules.",
        code: "<span class='err-lbl'>[c:M blue 10-2]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Color-Tag-Error:</span> Reverse range processing trajectory blocked.\n<span class='err-fix'>FiX:</span> Shift tracking limits into sequential incremental order sets.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Size Controls: Level I Scale",
        description: "The low-tier layout expansion token marker <span class='highlight'>[bigI]</span> increases character formatting outputs slightly over default styles.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Large\"</span> <span class='tdx-tag'>[bigI]</span>",
        output: "• <span style='font-size: 1.25rem;'>Large</span>"
    },
    {
        topic: "Blank Backdrop Definitions",
        description: "Activating backdrop transformations without passing parameters fails validation checks inside the structural parsing layer.",
        code: "<span class='err-lbl'>[c:B]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Color-Tag-Error:</span> Missing required backdrop coloring key details.\n<span class='err-fix'>FiX:</span> Provide structural style codes trailing the activation character.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Conflicting Quote Boundaries",
        description: "Mixing divergent termination indicators across single strings breaks the token sequence parsing structure.",
        code: "<span class='tdx-keyword'>print:</span> <span class='err-lbl'>\"Hello'</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Punc-Error:</span> TdX noticed a <span class='err-bold'>mixed quotation [\", ']</span> in the code\n<span class='err-fix'>FiX:</span> Try only one [\" \"] or [' ']\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Data Types: Characters Clarification",
        description: "To keep string processing simple and clean, TdX replaces custom single-character types with standard string layouts.",
        code: "charVal <span class='tdx-keyword'>:=</span> <span class='tdx-string'>'A'</span>\n<span class='tdx-keyword'>type-</span> charVal",
        output: "• [ type : 'str' ]"
    },
    {
        topic: "Extended Gradient Matrix Maps",
        description: "Passing more than 5 blending variables breaks the rendering capabilities of internal calculation pipelines.",
        code: "<span class='err-lbl'>[c: red, blue, green, grey, orange, black | 90]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Color-Tag-Error:</span> TdX couldn't <span class='err-bold'>use more than 5 colors</span> in gradient mode.\n<span class='err-fix'>FiX:</span> Reduce color counts within the 5-item limit.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Model Instances: Property Binding",
        description: "Initialize tracking models cleanly by mapping data arguments directly onto model configurations using simple pairs.",
        code: "u <span class='tdx-keyword'>:=</span> User<span class='tdx-tag'>[</span>name:<span class='tdx-string'>\"A\"</span>, age:<span class='tdx-num'>10</span><span class='tdx-tag'>]</span>\n<span class='tdx-keyword'>print:</span> u.name",
        output: "• A"
    },
    {
        topic: "Unclosed Modification Elements",
        description: "Leaving text layout properties unclosed at the end of a block causes data parsing leaks.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Fix\"</span> <span class='err-lbl'>[italic</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Punc-Error:</span> Missing terminal structural bracket on formatting flag.\n<span class='err-fix'>FiX:</span> Append a trailing bracket to secure the styling layer safely.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Gradient Boundaries Alert",
        description: "Gradient properties belong exclusively inside specialized TdX-Screen modules; calling them elsewhere stops compilation workflows.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Hi\"</span> <span class='err-lbl'>[c: red, blue | 90]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Screen-Error:</span> Gradient operations map exclusively inside isolated TdX-Screen files.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Redundant Color Initializations",
        description: "Chaining distinct tracking instances along identical output lanes triggers syntax overriding error routines.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Hi\"</span> <span class='err-lbl'>[c: red] [c: blue]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Color-Tag-Error:</span> Overlapping color configurations detected.\n<span class='err-fix'>FiX:</span> Define individual structural layout targets explicitly.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Single to Double Mixes",
        description: "Opening text values with double quotes but trailing them with single ones causes syntax tracking blocks.",
        code: "<span class='tdx-keyword'>print:</span> <span class='err-lbl'>\"Open'</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Punc-Error:</span> TdX noticed a <span class='err-bold'>mixed quotation [\", ']</span> in the code\n<span class='err-fix'>FiX:</span> Try only one [\" \"] or [' ']\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Lists (ls): Array Containers",
        description: "Lists manage structural collections that are ordered, mutable, and allow duplicate value sequences natively.",
        code: "a <span class='tdx-keyword'>:=</span> <span class='tdx-tag'>[</span>10, 20, 30, 20<span class='tdx-tag'>]</span>\n<span class='tdx-keyword'>print:</span> a",
        output: "• [10, 20, 30, 20]"
    },
    {
        topic: "Empty Color Token Cleansing",
        description: "Passing open color indicators maps fallback default color matrices directly, stripping active mutations.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Hi\"</span> <span class='tdx-tag'>[c:]</span>",
        output: "• Hi"
    },
    {
        topic: "Stray Dollar Injection Error",
        description: "Stray special characters typed outside string blocks trigger instant code execution stops.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Hi\"</span> <span class='err-lbl'>$$$</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Lexical-Error:</span> Stray or unmapped sequence blocks isolated within compilation lane.\n<span class='err-fix'>FiX:</span> Strip out unassigned symbols to restore normal code flow.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Unmapped Multi-Index Calls",
        description: "Attempting character indexes without explicit multi-mode modifiers triggers compilation errors inside the layout engine.",
        code: "<span class='err-lbl'>[c: blue 2-4]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Color-Tag-Error:</span> Missing dynamic range character indicator mapping token.\n<span class='err-fix'>FiX:</span> Insert an M modifier configuration directly adjacent to the property colon.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Magic Tags: Base Default Tone",
        description: "When no explicit properties are specified, the system defaults to clean white text on a deep charcoal terminal block layer.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Standard Contrast\"</span>",
        output: "• Standard Contrast"
    },
    {
        topic: "Optional Values: Safe Missing States",
        description: "Avoid unsafe runtime crashes with safe option markers that clearly tag values that may exist or go missing.",
        code: "name <span class='tdx-keyword'>:=</span> <span class='tdx-tag'>[op: str]</span>\nname <span class='tdx-keyword'>:=</span> <span class='tdx-string'>\"Active Data\"</span>",
        output: "• Active Data"
    },
    {
        topic: "Keyword Appended Late",
        description: "Instruction directives must spearhead command sequences; trailing modifier positions violate line token order maps.",
        code: "<span class='tdx-string'>\"Hello\"</span> <span class='err-lbl'>print:</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Line-Error:</span> TdX realized, \"print:\" keyword is not in a New Line.\n<span class='err-fix'>FiX:</span> Try <span class='err-bold'>\"print:\" keyword in a new line</span>.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Multi-Unions (mul): Type Layering",
        description: "Assign multi-type allowances to parameters, letting variables process different structural inputs securely.",
        code: "Id <span class='tdx-keyword'>:=</span> <span class='tdx-tag'>[u:</span> int, str<span class='tdx-tag'>]</span>",
        output: "<span class='tdx-comment'># Dynamic type validation interface configured</span>"
    },
    {
        topic: "Size Controls: Level II Scale",
        description: "The mid-tier oversized component tag scale identifier <span class='highlight'>[bigII]</span> elevates visual character bounds cleanly.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Mid Large\"</span> <span class='tdx-tag'>[bigII]</span>",
        output: "• <span style='font-size: 1.5rem; font-weight: 700;'>Mid Large</span>"
    },
    {
        topic: "Overlapping Minified Scales",
        description: "Enforcing multiple independent font-shrinking operations simultaneously breaks character line boundaries.",
        code: "<span class='tdx-keyword'>&gt;:</span> <span class='tdx-string'>\"Min\"</span> <span class='err-lbl'>[smallIII] [smallI]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Tag-Error:</span> Multiple small size scaling specifications conflicting.\n<span class='err-fix'>FiX:</span> Specify one clean text density parameter per run sequence.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Markdown Flags: Bold",
        description: "The specific formatting property block token <span class='highlight'>[bold]</span> renders standard string segments with thick weight parameters directly.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Strong Block\"</span> <span class='tdx-tag'>[bold]</span>",
        output: "• <b>Strong Block</b>"
    },
    {
        topic: "ImmuteSet (ist): Read-Only Sets",
        description: "Lock sets down completely against runtime modifications by adding leading configuration markers inside container properties.",
        code: "f <span class='tdx-keyword'>:=</span> <span class='tdx-tag'>{.</span>1, 2, 3<span class='tdx-tag'>}</span>",
        output: "<span class='tdx-comment'># Locked absolute non-mutable collection active</span>"
    },
    {
        topic: "Data Types: Boolean Legacies",
        description: "Old-school boolean systems evaluate parameters to standard binary variants rather than descriptive modern flags.",
        code: "x <span class='tdx-keyword'>:=</span> <span class='tdx-num'>True</span> <span class='tdx-tag'>[old]</span>\n<span class='tdx-keyword'>&gt;:</span> x",
        output: "• True"
    },
    {
        topic: "Unclosed Double Quotes Error",
        description: "String sequences left unclosed at the end of a line drop clear structural recovery details to guide developer fixes.",
        code: "<span class='tdx-keyword'>print:</span> <span class='err-lbl'>\"Open String</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Punc-Error:</span> TdX noticed an <span class='err-bold'>unclosed [\" \"]</span> in the code\n<span class='err-fix'>FiX:</span> Try closing \"Open String\"\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Model Instances: Type Constraints",
        description: "Passing data types that don't match the original model template triggers immediate variable mapping errors.",
        code: "User <span class='tdx-tag'>[.</span> name <span class='tdx-tag'>[str]</span>, age <span class='tdx-tag'>[int]</span> <span class='tdx-tag'>]</span>\nu <span class='tdx-keyword'>:=</span> User<span class='tdx-tag'>[</span><span class='tdx-num'>10</span>, <span class='tdx-string'>\"A\"</span><span class='tdx-tag'>]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Model-Type-Error:</span> Provided type signatures mismatch original target definitions standard records.\n<span class='err-line'>[LINE 2]</span>"
    },
    {
        topic: "Unclosed Backtick Warnings",
        description: "Unterminated backtick characters are flagged instantly to isolate and protect cross-document data flows.",
        code: "<span class='tdx-keyword'>print:</span> <span class='err-lbl'>`Inline context</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Punc-Error:</span> TdX noticed an <span class='err-bold'>unclosed [\` \`]</span> in the code\n<span class='err-fix'>FiX:</span> Close the backtick parameters securely.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Deformed Nesting Logic",
        description: "Internal quote additions without structural escape marks break baseline token analysis arrays cleanly.",
        code: "<span class='tdx-keyword'>print:</span> <span class='err-lbl'>\"He said \"Hi\"\"</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Punc-Error:</span> TdX noticed an <span class='err-bold'>extra [\"] inside a [\" \"]</span> in the code\n<span class='err-fix'>FiX:</span> Try removing that [\"] inside the [\" \"]\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Unassigned Gradient Color Pointers",
        description: "Empty character positions inside color strings cause processing failures across internal layout trackers.",
        code: "<span class='err-lbl'>[c: , , | 90]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Color-Tag-Error:</span> Empty gradient color tracking pointers detected.\n<span class='err-fix'>FiX:</span> Assign valid structural color codes onto target spaces.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Literal Angle Formats",
        description: "Vector calculations require pure numeric definitions; alphabetic configurations break translation matrices.",
        code: "<span class='err-lbl'>[c: red, blue | ninety]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Color-Tag-Error:</span> Invalid gradient angle text string captured.\n<span class='err-fix'>FiX:</span> Convert parameters into pure numeric values.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Displaced Tag Orders",
        description: "Declaring style modification tags before output expressions violates basic code order standards.",
        code: "<span class='err-lbl'>[c: blue]</span> <span class='tdx-keyword'>&gt;:</span> <span class='tdx-string'>\"Hello\"</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Tag-Error:</span> TdX can only use <span class='err-bold'>printing tags</span> at the first of sentence.\n<span class='err-fix'>FiX:</span> Use tag at last.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Defective Control Shortcut",
        description: "Malformed expression shortcut symbols prompt structural search suggestions matching standard library indicators.",
        code: "<span class='err-lbl'>&gt;</span> <span class='tdx-string'>\"Hello\"</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>SynTaX-Error:</span> TdX can't <span class='err-bold'>understand \"&gt;\"</span>, TdX thinks u mean <span class='err-bold'>\"&gt;:\"</span>.\n<span class='err-fix'>FiX:</span> <span class='err-try'>Try</span> using <span class='err-fix-txt'>\"print:\"</span>.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Multi-Line String Splitting Warning",
        description: "Splitting standard strings over unmapped newline sequences causes immediate evaluation warnings on secondary frames.",
        code: "<span class='tdx-keyword'>print:</span> \n<span class='tdx-string'>\"hello\"</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-warn'>!WARNING: Code is perfect! But, TdX thinks that you should print that \"hello\".</span> <span class='err-line'>[LINE 2]</span>"
    },
    {
        topic: "Unclosed Interpolation Mark",
        description: "Backtick literals tracking internal values must complete encapsulation definitions to avoid evaluation locks.",
        code: "<span class='tdx-keyword'>print:</span> <span class='err-lbl'>`Hello</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Punc-Error:</span> TdX noticed an <span class='err-bold'>unclosed [\` \`]</span> in the code\n<span class='err-fix'>FiX:</span> Try closing the literal sequence\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Magic Tags: Background Coloring",
        description: "The token modifier value <span class='highlight'>c:B</span> isolates output color updates exclusively onto the terminal panel character background.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-num'>1234</span> <span class='tdx-tag'>[c:B red]</span>",
        output: "<span style='background-color:#ff3333; color:#fff;'>1234</span>"
    },
    {
        topic: "Variable Rules: Case Variations",
        description: "Including even one lowercase letter automatically tags an item as an updateable variable rather than a fixed global constant.",
        code: "<span class='tdx-type'>Global_var</span> <span class='tdx-keyword'>:=</span> <span class='tdx-num'>100</span>\n<span class='tdx-keyword'>print:</span> Global_var",
        output: "• 100"
    },
    {
        topic: "Missing Output Keyword Fallback",
        description: "Raw value bindings isolated on structural run lines generate immediate fallback warnings to enforce intentional design parameters.",
        code: "<span class='tdx-string'>\"Hello\"</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-warn'>!WARNING: Code is perfect! But, TdX thinks that you should print that \"Hello\".</span> <span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Size Controls: Level I Minimum",
        description: "The baseline reduction formatting flag <span class='highlight'>[smallI]</span> scales line dimensions marginally below standard terminal weights.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Small\"</span> <span class='tdx-tag'>[smallI]</span>",
        output: "• <span style='font-size: 0.85rem;'>Small</span>"
    },
    {
        topic: "Redundant Punctuation Bound",
        description: "Double processing markers sequence violations are caught by internal checker nodes, firing quick clean instructions.",
        code: "<span class='tdx-keyword'>print::</span> <span class='tdx-string'>\"Hello\"</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Punc-Error:</span> TdX noticed an <span class='err-bold'>extra \":\"</span> in the code\n<span class='err-fix'>FiX:</span> Try only one \":\".\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Data Types: Integer Type Profiles",
        description: "Whole values assign directly into basic int storage systems, running fast mathematical calculations smoothly.",
        code: "age <span class='tdx-keyword'>:=</span> <span class='tdx-num'>123</span>\n<span class='tdx-keyword'>type-</span> age",
        output: "• [ type : 'int' ]"
    },
    {
        topic: "Floating Alignments Tracker",
        description: "Standalone styling elements defined outside active print loops trigger compiler line optimization warnings.",
        code: "<span class='err-lbl'>[Middle]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-warn'>!WARNING: Code is perfect! But, TdX thinks that you should print that [Middle] tag with a value.</span> <span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Space Omission After Color Colon",
        description: "Omitting the necessary trailing spaces following structural colon properties causes immediate tag parsing failures.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Hi\"</span> <span class='err-lbl'>[c:red]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Color-Tag-Error:</span> TdX color tags need a <span class='err-bold'>space after \"c:\"</span> argument.\n<span class='err-fix'>FiX:</span> Use a space after c:\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Sets (st): Unique Value Lists",
        description: "Sets filter unique collections automatically, stripping out duplicate entries and leaving values unordered.",
        code: "s <span class='tdx-keyword'>:=</span> <span class='tdx-tag'>{</span>1, 2, 3, 2<span class='tdx-tag'>}</span>\n<span class='tdx-keyword'>print:</span> s",
        output: "• {1, 2, 3}"
    },
    {
        topic: "Underflow Angle Signatures",
        description: "Negative vector values violate lower boundary baseline constraints across standard calculation maps.",
        code: "<span class='err-lbl'>[c: red, blue | -20]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Color-Tag-Error:</span> Negative angle vector bounds detected.\n<span class='err-fix'>FiX:</span> Restructure angle values within standard positive circles.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Whitespace Parsing Layout",
        description: "Standard quotes and standalone character enclosures vanish entirely during output processing unless explicit single string configurations are activated.",
        code: "<span class='tdx-keyword'>print:</span> \" \" ' '",
        output: "• "
    },
    {
        topic: "Inverse Scale Contradictions",
        description: "Mixing text-shrinking and text-expanding tags on the same string halts the layout rendering engine.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Mix\"</span> <span class='err-lbl'>[smallI] [bigI]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Tag-Error:</span> Big and small dimensional variables clash directly.\n<span class='err-fix'>FiX:</span> Declare a single unified text sizing track clearly.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Variable Rules: Numeric Prefix Rejection",
        description: "Variable names cannot start with a numeric character; token tracking blocks numbers from leading structural code rows.",
        code: "<span class='err-lbl'>1val</span> <span class='tdx-keyword'>:=</span> <span class='tdx-num'>50</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Naming-Error:</span> First character of identifier string cannot evaluate directly as an integer code.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Ranges (ran): Base Sequences",
        description: "Generates linear number series instantly based on specific numerical upper limits.",
        code: "r <span class='tdx-keyword'>:=</span> <span class='tdx-tag'>ran[</span>5<span class='tdx-tag'>]</span>\n<span class='tdx-keyword'>print:</span> <span class='tdx-keyword'>ls-</span> r",
        output: "• [1, 2, 3, 4, 5]"
    },
    {
        topic: "Missing Pipe Matrix Segregator",
        description: "Blending multiple independent system colors requires absolute demarcation parameters to separate targets cleanly.",
        code: "<span class='err-lbl'>[c: red blue 90]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Color-Tag-Error:</span> Missing structural matrix separator parameters.\n<span class='err-fix'>FiX:</span> Segment parameters with clean comma bounds and vector dividers.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Model Instances: Fast Positioning",
        description: "Model instances accept fast implicit property entries when array layout fields align with core template files.",
        code: "u <span class='tdx-keyword'>:=</span> User<span class='tdx-tag'>[</span><span class='tdx-string'>\"A\"</span>, <span class='tdx-num'>10</span><span class='tdx-tag'>]</span>\n<span class='tdx-keyword'>print:</span> u.age",
        output: "• 10"
    },
    {
        topic: "Shared Character Index Overlap",
        description: "Layering multiple active character coloring rules over identical string positions triggers tracking identity collisions.",
        code: "<span class='err-lbl'>[c:M red 1-5, blue 3-7]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Color-Tag-Error:</span> Overlapping structural multi-color ranges detected.\n<span class='err-fix'>FiX:</span> Isolate index brackets to preserve single styling assignments.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Markdown Flags: Strikethrough",
        description: "The explicit line strike flag token component <span class='highlight'>[strike]</span> paints deletion layout markings across target strings.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Crossed\"</span> <span class='tdx-tag'>[strike]</span>",
        output: "• <del>Crossed</del>"
    },
    {
        topic: "Conflictive Alignment Maps",
        description: "Declaring divergent layout positioning rules simultaneously causes spatial layout engine parsing errors.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Hi\"</span> <span class='err-lbl'>[left] [right]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Tag-Error:</span> TdX can only use <span class='err-bold'>one position tag</span> at a time.\n<span class='err-fix'>FiX:</span> Use only one of [right] or [left].\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Stores (sto): Unique Key Rules",
        description: "Keys must remain completely unique across data stores; entering duplicate keys overwrites earlier data references.",
        code: "d <span class='tdx-keyword'>:=</span> <span class='tdx-tag'>[</span> <span class='tdx-string'>\"k\"</span> • <span class='tdx-num'>1</span>, <span class='tdx-string'>\"k\"</span> • <span class='tdx-num'>2</span> <span class='tdx-tag'>]</span>",
        output: "<span class='tdx-comment'># Store registered with index overwrite complete safely</span>"
    },
    {
        topic: "Floating Tag Orphan Warnings",
        description: "Standalone positioning elements processing outside structural output streams generate descriptive context warnings.",
        code: "<span class='err-lbl'>[right]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-warn'>!WARNING: Code is perfect! But, TdX thinks that you should print that [right] tag with a value.</span> <span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Unclosed single quote structural crash",
        description: "Unfinished literal sequences trigger standard punctuate errors inside the parsing engine.",
        code: "<span class='tdx-keyword'>&gt;:</span> <span class='err-lbl'>'Hanging text</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Punc-Error:</span> TdX noticed an <span class='err-bold'>unclosed [' ']</span> in the code\n<span class='err-fix'>FiX:</span> Try closing the literal assignment safely.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Variable Rules: Minimum Character Laws",
        description: "Valid labels require at least one alpha or explicit underline signature to allocate structural memory spaces.",
        code: "<span class='err-lbl'>_</span> <span class='tdx-keyword'>:=</span> <span class='tdx-string'>\"Empty\"</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Naming-Error:</span> Variable strings must capture alphanumeric character patterns.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Illegal Trailing Punctuation",
        description: "Placing comma delimiters as trailing elements within active properties breaks internal split maps.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Hi\"</span> <span class='err-lbl'>[c: red,]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Tag-Punc-Error:</span> TdX don't use a <span class='err-bold'>comma as the last character</span> in a Tag.\n<span class='err-fix'>FiX:</span> Try removing \",\" at end.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Size Controls: Minimum Scale",
        description: "The microscopic scale modifier parameter component <span class='highlight'>[smallIII]</span> compacts character rows down to minimum view bounds.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Micro\"</span> <span class='tdx-tag'>[smallIII]</span>",
        output: "• <span style='font-size: 0.6rem;'>Micro</span>"
    },
    {
        topic: "Colorless Index Target",
        description: "Defining parsing boundaries without binding target color properties leaves system rendering calculations empty.",
        code: "<span class='err-lbl'>[c:M 1-5]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Color-Tag-Error:</span> Missing target color value definition within indexed system blocks.\n<span class='err-fix'>FiX:</span> Declare your color keyword prior to the index configuration.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Non-Numeric Range Indexing",
        description: "Positional token calculations require explicit base integers; literal symbols break formatting logic trackers.",
        code: "<span class='err-lbl'>[c:M red a-b]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Color-Tag-Error:</span> Non-numeric structural character range indices captured.\n<span class='err-fix'>FiX:</span> Replace characters with pure sequential integers.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Multi-Colon Separators Error",
        description: "Accidentally typing back-to-back binding operators sets off punctuation errors inside the syntax parser.",
        code: "<span class='tdx-keyword'>&gt;::</span> <span class='tdx-string'>\"Data\"</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Punc-Error:</span> TdX noticed an <span class='err-bold'>extra \":\"</span> in the code\n<span class='err-fix'>FiX:</span> Try only one \":\".\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Space Alignment Rules",
        description: "Ensure exact spatial formatting lines follow the color tag indicator to maintain robust layout compilation tracks.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Fix Rule\"</span> <span class='err-lbl'>[c:blue]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Color-Tag-Error:</span> TdX color tags need a <span class='err-bold'>space after \"c:\"</span> argument.\n<span class='err-fix'>FiX:</span> Use a space after *c:*\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Omission of Multi-Mode Tokens",
        description: "Targeted indexing range systems require strict parsing configurations to initiate custom tracking routines safely.",
        code: "<span class='err-lbl'>[c: red 1-5]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Color-Tag-Error:</span> Missing dynamic range character indicator mapping token.\n<span class='err-fix'>FiX:</span> Append the M modifier sequence securely after the colon parameter.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Case-Conforming Tag Validation",
        description: "Case rules enforce strict structural properties across layout definitions to retain language theme cohesion.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Hi\"</span> <span class='tdx-tag'>[middle]</span>",
        output: "• Hi <span class='tdx-comment'>(Valid transformation executed)</span>"
    },
    {
        topic: "Bytes (bt): Hex Binary Data",
        description: "Raw binary configurations are packed inside angle brackets, locking values down into flat, unchangeable data arrays.",
        code: "b <span class='tdx-keyword'>:=</span> <span class='tdx-tag'>&lt;</span>65, 66, 67<span class='tdx-tag'>&gt;</span>\n<span class='tdx-keyword'>print:</span> b",
        output: "• &lt;ABC&gt;"
    },
    {
        topic: "Invalid Scale Tier Callouts",
        description: "Requesting rendering sizes outside certified tracking indexes triggers immediate runtime compilation errors.",
        code: "<span class='tdx-keyword'>print:</span> <span class='err-lbl'>[bigIV]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Tag-Error:</span> Invalid scale tier target identifier.\n<span class='err-fix'>FiX:</span> Match parameters against standard tiers (I, II, or III).\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Out of Bounds Hex Codes Warning",
        description: "Passing invalid hexadecimal characters sets off error validations inside the color assignment module.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Bad Hex\"</span> <span class='err-lbl'>[c: #ZZZZ99]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Color-Tag-Error:</span> TdX couldn't <span class='err-bold'>find \"#ZZZZ99\"</span> Hex.\n<span class='err-fix'>FiX:</span> Use a valid Hex code configuration map.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Lists (ls): Inverted Index Queries",
        description: "Pass zero or negative indices to scan lists in reverse order, extracting trailing data nodes instantly.",
        code: "a <span class='tdx-keyword'>:=</span> <span class='tdx-tag'>[</span>10, 20, 30<span class='tdx-tag'>]</span>\n<span class='tdx-keyword'>print:</span> a[-1]",
        output: "• 30"
    },
    {
        topic: "Nested Quote Collisions",
        description: "Injecting bare literal symbols directly inside active string loops breaks downstream code scanning passes.",
        code: "<span class='tdx-keyword'>print:</span> <span class='err-lbl'>\"Nested \"Errors\"\"</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Punc-Error:</span> TdX noticed an <span class='err-bold'>extra [\"] inside a [\" \"]</span> in the code\n<span class='err-fix'>FiX:</span> Try removing that [\"] inside the [\" \"]\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Magic Tags: Compound Style Layers",
        description: "Apply background coloring definitions and text foreground tones simultaneously by defining distinct tracking maps inside your tag sequence.",
        code: "<span class='tdx-keyword'>&gt;:</span> <span class='tdx-string'>\"TAHMID\"</span> <span class='tdx-tag'>[c:B red, c: blue]</span>",
        output: "<span style='background-color:#ff3333; color:#81a1c1; font-weight:bold;'>TAHMID</span>"
    },
    {
        topic: "Gradient Color Limit Breach",
        description: "Dynamic color blends permit a strict maximum boundary allocation of up to 5 individual data inputs.",
        code: "<span class='err-lbl'>[c: red, blue, green, yellow, black, white | 45]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Color-Tag-Error:</span> TdX couldn't <span class='err-bold'>use more than 5 colors</span> in gradient mode.\n<span class='err-fix'>FiX:</span> Use a less than 5 colors.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Constants: Immutability Constraints",
        description: "Capitalized token configurations map onto strict system memory rules, blocking subsequent runtime overwrites.",
        code: "<span class='tdx-type'>PI</span> <span class='tdx-keyword'>:=</span> <span class='tdx-num'>3.14159</span>\n<span class='tdx-type'>PI</span> <span class='err-lbl'>:=</span> <span class='tdx-num'>3.14</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Const-Error:</span> Cannot modify structural constant fields once explicitly assigned.\n<span class='err-line'>[LINE 2]</span>"
    },
    {
        topic: "Enum Subsets: Tracking Type Inspections",
        description: "Extract active field identities inside Pick arrays to confirm data processing structures match your layout rules.",
        code: "s <span class='tdx-keyword'>:=</span> Status.Ready\n<span class='tdx-keyword'>type-</span> s",
        output: "• [ PK-Status : 'int']"
    },
    {
        topic: "Unclosed Param Bracket Alert",
        description: "Leaving parameter strings open across system styles blocks text compilation workflows instantly.",
        code: "<span class='tdx-keyword'>&gt;:</span> <span class='tdx-string'>\"Test\"</span> <span class='err-lbl'>[c: green</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Punc-Error:</span> TdX noticed a <span class='err-bold'>missing \"]\"</span> in the color tag.\n<span class='err-fix'>FiX:</span> Try adding one \"]\" at the last of the tag\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Out of Bounds Hex Codes Failure",
        description: "Hex character sets falling outside standardized structural validation guidelines fail verification constraints instantly.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Hi\"</span> <span class='err-lbl'>[c: #GGHH11]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Color-Tag-Error:</span> TdX couldn't <span class='err-bold'>find \"#GGHH11\"</span> Hex.\n<span class='err-fix'>FiX:</span> Use a valid Hex code sequence.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Typographic Axis Overlaps",
        description: "Applying vertical subscript and superscript modifications simultaneously creates an impossible text position map.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Hi\"</span> <span class='err-lbl'>[sub] [sup]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Tag-Error:</span> Subscript and superscript conflict blocks baseline generation.\n<span class='err-fix'>FiX:</span> Isolate distinct structural rendering vectors explicitly.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Dynamic Character Index Overflow",
        description: "Targeting pointer specifications that map deeper than actual character counts causes immediate string reference panics.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Hi\"</span> <span class='err-lbl'>[c:M red 1-20]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Color-Tag-Error:</span> Index exceeds context text dimensions length.\n<span class='err-fix'>FiX:</span> Restructure boundaries to fall within actual word layouts.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Markdown Flags: Subscript",
        description: "The markup layout subscript token <span class='highlight'>[sub]</span> shifts contextual placement bounds vertically lower across display rows.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Base\"</span> <span class='tdx-tag'>[sub]</span>",
        output: "• <sub>Base</sub>"
    },
    {
        topic: "Magic Tags: Hex Color Values",
        description: "Color tokens take direct hex code values seamlessly. Ensure a rigid spatial boundary layout follows the declaration argument.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Hex Active\"</span> <span class='tdx-tag'>[c: #00ff66]</span>",
        output: "<span class='neon-txt'>Hex Active</span>"
    },
    {
        topic: "Unregistered Visual Properties",
        description: "Calling stylistic text variations outside certified token libraries triggers syntax rejection errors.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Hi\"</span> <span class='err-lbl'>[fancy]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Tag-Error:</span> Unknown markdown transformation selector captured.\n<span class='err-fix'>FiX:</span> Use standard library elements like bold, italic, or strike.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Stray Lexical Symbol Failures",
        description: "Stray special characters matching no functional system keywords trigger lexical scanning validation blocks.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Hi\"</span> <span class='err-lbl'>@@@</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Lexical-Error:</span> Stray or unmapped sequence blocks isolated within compilation lane.\n<span class='err-fix'>FiX:</span> Remove unassigned character assets outside code strings.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Ranges (ran): Range Step Bounds",
        description: "Define distinct start and stop metrics using standard dot delimiters to keep loops precise.",
        code: "r <span class='tdx-keyword'>:=</span> <span class='tdx-tag'>ran[</span>0 • 3<span class='tdx-tag'>]</span>\n<span class='tdx-keyword'>print:</span> <span class='tdx-keyword'>ls-</span> r",
        output: "• [0, 1, 2, 3]"
    },
    {
        topic: "Duplicate Weight Injections",
        description: "Applying identical weight parameters back-to-back creates messy overhead loops in the compiler.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Ok\"</span> <span class='err-lbl'>[italic] [italic]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Tag-Error:</span> Duplicate structural italic tag declaration isolated.\n<span class='err-fix'>FiX:</span> Strip out secondary reduntant token elements cleanly.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Ecosystem Structural Logic Engine",
        description: "TdX drops conventional lexer/parser limitations via a tightly synchronized array of 5 architectural cores managed concurrently by the native Xtder Engine environment.",
        code: "<span class='tdx-comment'># Running TdX structural compilation loop core analysis</span>",
        output: "🟩 TdXoken -&gt; ConnecTdXer -&gt; TdX-Errors -&gt; GeneraTdXer -&gt; OuTdXput"
    },
    {
        topic: "Phantom Layout Directives",
        description: "Calling unindexed layout tracking tags breaks internal visual position matrix generations.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Hi\"</span> <span class='err-lbl'>[center]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Tag-Error:</span> TdX cant find <span class='err-bold'>center</span> tag.\n<span class='err-fix'>FiX:</span> Try checking the list of all tags in README.md\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Conflicting Typographic Shifts",
        description: "Combining upward and downward text shifts on the same string block breaks baseline vertical alignment maps.",
        code: "<span class='tdx-keyword'>&gt;:</span> <span class='tdx-string'>\"Test\"</span> <span class='err-lbl'>[sup] [sub]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Tag-Error:</span> Subscript and superscript conflict blocks baseline generation.\n<span class='err-fix'>FiX:</span> Choose a single vertical direction path to avoid code collisions.\n='[LINE 1]'"
    },
    {
        topic: "Spatial Attribute Overflows",
        description: "Passing multiple target values to singular color tags breaks downstream compiler calculations.",
        code: "<span class='tdx-keyword'>&gt;:</span> <span class='tdx-string'>\"Data\"</span> <span class='err-lbl'>[c: red yellow]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Color-Tag-Error:</span> TdX color tags can have <span class='err-bold'>only 1 color value</span> in normal mode\n<span class='err-fix'>FiX:</span> Separate assignments or call a gradient map.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Group-Mutation System Intercept",
        description: "Attempting to change values inside a Group breaks runtime validation rules, preserving the integrity of original data streams.",
        code: "t <span class='tdx-keyword'>:=</span> <span class='tdx-tag'>(</span>1, 2, 3<span class='tdx-tag'>)</span>\nt[1] <span class='err-lbl'>:=</span> <span class='tdx-num'>5</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Group-Mutation-Error:</span> Cannot overwrite fixed values inside locked structural Groups.\n<span class='err-line'>[LINE 2]</span>"
    },
    {
        topic: "Multi-Mode Background Token Formatting",
        description: "Injecting whitespace separations inside backdrop command parameters breaks core parsing sequence validation pipelines.",
        code: "<span class='err-lbl'>[c: B red]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Color-Tag-Error:</span> Space after B modifier token parameter is strictly prohibited.\n<span class='err-fix'>FiX:</span> Compact the text to link the background code block directly.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Overlapping Backdrop Definitions",
        description: "Declaring multiple separate background blocks over a single string target sets off rendering collision warnings.",
        code: "<span class='err-lbl'>[c:B blue] [c:B grey]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Color-Tag-Error:</span> Multiple background declarations colliding.\n<span class='err-fix'>FiX:</span> Consolidate separate layouts into a single multi-index structure.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Colorless Backdrop Requests",
        description: "Requesting a background style change without passing an actual color choice triggers immediate script failures.",
        code: "<span class='err-lbl'>[c:B]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Color-Tag-Error:</span> Missing required backdrop coloring key details.\n<span class='err-fix'>FiX:</span> Pass a valid system color code directly behind the modifier.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "ByteMute (btm): Changeable Binaries",
        description: "Prepend dot symbols inside tracking blocks to keep binary streams open for runtime updates.",
        code: "b <span class='tdx-keyword'>:=</span> <span class='tdx-tag'>&lt;.</span>65, 66, 67<span class='tdx-tag'>&gt;</span>\nb[1] <span class='tdx-keyword'>:=</span> <span class='tdx-num'>97</span>\n<span class='tdx-keyword'>print:</span> b",
        output: "• &lt;.aBC&gt;"
    },
    {
        topic: "Missing Axis Element Tag Error",
        description: "Using alignment calls that don't match the visual design library throws structural configuration warnings.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Test\"</span> <span class='err-lbl'>[east]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Tag-Error:</span> TdX cant find <span class='err-bold'>east</span> tag.\n<span class='err-fix'>FiX:</span> Try checking the list of all tags in README.md\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Duplicated Weight Directives",
        description: "Declaring identical structural text formatting options sequentially creates useless rendering overhead loops.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Hi\"</span> <span class='err-lbl'>[bold] [bold]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Tag-Error:</span> Duplicate structural bold tag declaration isolated.\n<span class='err-fix'>FiX:</span> Strip out secondary reduntant token elements cleanly.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Character Span Formatting Error",
        description: "Defining isolated index limits without matching span limits leaves character operations unassigned.",
        code: "<span class='err-lbl'>[c:M green 2]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Color-Tag-Error:</span> Invalid range format properties recorded.\n<span class='err-fix'>FiX:</span> Format your range mapping with explicit delimiter symbols.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Model Instances: Property Value Extraction",
        description: "Model instances accept fast implicit property entries when array layout fields align with core template files.",
        code: "u <span class='tdx-keyword'>:=</span> User<span class='tdx-tag'>[</span><span class='tdx-string'>\"A\"</span>, <span class='tdx-num'>10</span><span class='tdx-tag'>]</span>\n<span class='tdx-keyword'>print:</span> u.name",
        output: "• A"
    },
    {
        topic: "Overlapping Structural Backdrop Parameters",
        description: "Adding spaces between style colons and background parameters breaks the token extraction routine.",
        code: "<span class='err-lbl'>[c: B green]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Color-Tag-Error:</span> Space after B modifier token parameter is strictly prohibited.\n<span class='err-fix'>FiX:</span> Link configuration labels closely without space blocks.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Missing Required Element Print Warnings",
        description: "Raw string values dropped standalone on an active row prompt simple syntax warnings to ensure design clarity.",
        code: "<span class='tdx-string'>\"System Check\"</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-warn'>!WARNING: Code is perfect! But, TdX thinks that you should print that \"System Check\".</span> <span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Magic Tags: Background Multi-Color",
        description: "The structural tag combo layer <span class='highlight'>c:B-M</span> blends segmented backdrop blocks along precise indexing layout constraints cleanly.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Grid\"</span> <span class='tdx-tag'>[c:B-M red 1-2, blue 3-4]</span>",
        output: "<span style='background-color:#ff3333;'>Gr</span><span style='background-color:#81a1c1;'>id</span>"
    },
    {
        topic: "Invalid Visual Sizing Identifier",
        description: "Calling text scaling tiers that sit outside the core design library sets off syntax errors.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Bad\"</span> <span class='err-lbl'>[bigV]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Tag-Error:</span> Invalid scale tier target identifier.\n<span class='err-fix'>FiX:</span> Restructure options to match verified system tiers (I, II, or III).\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Spatial Color Mode Exceeded",
        description: "Standard terminal tracking loops limit standard options to singular target designations per layout token block.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Hi\"</span> <span class='err-lbl'>[c: red blue green]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Color-Tag-Error:</span> TdX color tags can have <span class='err-bold'>only 1 color value</span> in normal mode\n<span class='err-fix'>FiX:</span> Use multi-mode gradient indicators instead.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Redundant Comma Track Flags",
        description: "Leaving trailing comma separators inside structural styling tags triggers immediate code optimization alerts.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Data\"</span> <span class='err-lbl'>[c: green,]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Tag-Punc-Error:</span> TdX don't use a <span class='err-bold'>comma as the last character</span> in a Tag.\n<span class='err-fix'>FiX:</span> Try removing \",\" at end.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Structural Blank Spacer Line",
        description: "Standalone print assignments containing empty data generate intentional blank row separations across display arrays safely.",
        code: "<span class='tdx-keyword'>print:</span>",
        output: "\n"
    },
    {
        topic: "Reverse Range Processing Collision",
        description: "Setting starting range pointers higher than your termination parameters triggers immediate parsing errors.",
        code: "<span class='err-lbl'>[c:M red 8-3]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Color-Tag-Error:</span> Reverse range processing trajectory blocked.\n<span class='err-fix'>FiX:</span> Arrange bounds from smaller values to larger ones.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Overlapping Vector Sizing Axis",
        description: "Mixing text-shrinking and text-expanding tags on the same string block breaks text layout metrics.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Hi\"</span> <span class='err-lbl'>[smallI] [bigI]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Tag-Error:</span> Big and small dimensional variables clash directly.\n<span class='err-fix'>FiX:</span> Declare a unified spatial sizing criteria path clearly.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Stores (sto): Property Extraction",
        description: "Query custom stores using target key strings to pull specific parameters out of data pools instantly.",
        code: "<span class='tdx-keyword'>print:</span> student[<span class='tdx-string'>\"name\"</span>]",
        output: "• Tahmid"
    },
    {
        topic: "Overlapping Alignment Definitions",
        description: "Defining multiple competing text alignment rules simultaneously blocks output layout configurations.",
        code: "<span class='tdx-keyword'>&gt;:</span> <span class='tdx-string'>\"Error\"</span> <span class='err-lbl'>[left] [Middle]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Tag-Error:</span> TdX can only use <span class='err-bold'>one position tag</span> at a time.\n<span class='err-fix'>FiX:</span> Use only one of [Middle] or [left].\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Dynamic Character Index Boundary Error",
        description: "Passing coloring ranges that exceed the length of the string character array causes calculation errors.",
        code: "<span class='tdx-keyword'>&gt;:</span> <span class='tdx-string'>\"Ok\"</span> <span class='err-lbl'>[c:M red 1-10]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Color-Tag-Error:</span> Index exceeds context text dimensions length.\n<span class='err-fix'>FiX:</span> Scale back index parameters to match your actual text assets.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Blockquote Modifier Intercept",
        description: "Blockquote modifiers require direct access to graphic screen frames to structure paragraph alignments cleanly.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Text Quote\"</span> <span class='err-lbl'>[quote]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Tag-Error:</span> Quote tag structures match exclusively against active screen system configurations.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Markdown Flags: Italic Variable Display",
        description: "The specific formatting property block token <span class='highlight'>[italic]</span> renders slanted weights to terminal output screens.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Italic Stream\"</span> <span class='tdx-tag'>[italic]</span>",
        output: "• <i>Italic Stream</i>"
    },
    {
        topic: "Malformed Background Modifier Chaining",
        description: "Chaining broken identifier blocks inside backdrop maps violates basic token layout laws.",
        code: "<span class='err-lbl'>[c:B-M-M red]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Color-Tag-Error:</span> Invalid background multi-mode syntax parameters.\n<span class='err-fix'>FiX:</span> Restructure configurations down to single clean assignment maps.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Lists (ls): Base Index Access",
        description: "List elements are indexed starting at 1, offering clean alignment with human data tracking workflows.",
        code: "a <span class='tdx-keyword'>:=</span> <span class='tdx-tag'>[</span>10, 20, 30<span class='tdx-tag'>]</span>\n<span class='tdx-keyword'>print:</span> a[1]",
        output: "• 10"
    },
    {
        topic: "Spoiler Module Layout Constraint",
        description: "Spoiler visibility elements require target terminal drivers to process content concealments correctly.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Secret\"</span> <span class='err-lbl'>[spo]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Tag-Error:</span> Spoiler tags operate strictly within active TdX-Screen rendering boundaries.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Overflow Vector Orientations",
        description: "Angle bounds exceeding complete rotation thresholds map outside standard ergonomic tracking limits.",
        code: "<span class='err-lbl'>[c: red, blue | 999]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Color-Tag-Error:</span> Angle overflow threshold reached.\n<span class='err-fix'>FiX:</span> Enforce values less than or equal to 360 degrees.\n<span class='err-line'>[LINE 1]</span>"
    },
    {
        topic: "Magic Tags: Middle Alignment",
        description: "The positioning tag layout <span class='highlight'>[Middle]</span> processes text calculation configurations to center layout data on screen views.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Center Stream\"</span> <span class='tdx-tag'>[Middle]</span>",
        output: "                                • Center Stream"
    },
    {
        topic: "Shortcut Spacer Line Execution",
        description: "Standalone custom short colons function perfectly as line breakout operations when left unassigned.",
        code: "<span class='tdx-keyword'>:</span>",
        output: "\n"
    },
    {
        topic: "Enum Subsets: Pick (pk) Setup",
        description: "Declare clean enumerable variable fields safely across specific option targets by using double dot punctuation sequences.",
        code: "Status <span class='tdx-tag'>[..</span>\n  Ready <span class='tdx-keyword'>:=</span> <span class='tdx-num'>123</span>\n  Loading <span class='tdx-keyword'>:=</span> <span class='tdx-num'>456</span>\n<span class='tdx-tag'>..]</span>",
        output: "<span class='tdx-comment'># Pick enumerable dictionary validated successfully</span>"
    },
    {
        topic: "Multi-Reduction Scale Overlaps",
        description: "Applying multiple minified scaling instructions on single strings breaks text layout metrics.",
        code: "<span class='tdx-keyword'>print:</span> <span class='tdx-string'>\"Hi\"</span> <span class='err-lbl'>[smallI] [smallIII]</span>",
        output: "<span class='err-filename'>FILE: main.tdx</span>\n\n<span class='err-lbl'>Tag-Error:</span> Multiple small size scaling specifications conflicting.\n<span class='err-fix'>FiX:</span> Define only single density parameters per string sequence.\n<span class='err-line'>[LINE 1]</span>"
    }
];

let currentCarouselIndex = 0;
const rotationIntervalTime = 6000; // Rotates continuously every 6 seconds

function rotateSyntaxShowcase() {
    // Safety check to verify dataset array contains items
    if (!tdxShowcaseData || tdxShowcaseData.length === 0) return;

    const data = tdxShowcaseData[currentCarouselIndex];
    
    // Select targets safely
    const topicHeading = document.getElementById("tdxTopicHeading");
    const topicDescription = document.getElementById("tdxTopicDescription");
    const codeDisplay = document.getElementById("tdxCodeDisplay");
    const outputDisplay = document.getElementById("tdxOutputDisplay");
    
    if (topicHeading && topicDescription && codeDisplay && outputDisplay) {
        // Apply smooth transition opacity fades out
        [topicHeading, topicDescription, codeDisplay, outputDisplay].forEach(el => {
            el.style.opacity = "0";
            el.style.transition = "opacity 0.3s ease";
        });
        
        setTimeout(() => {
            // Swap texts and components smoothly
            topicHeading.innerHTML = data.topic;
            topicDescription.innerHTML = data.description;
            codeDisplay.innerHTML = data.code;
            outputDisplay.innerHTML = data.output;
            
            // Fade back into standard view
            [topicHeading, topicDescription, codeDisplay, outputDisplay].forEach(el => {
                el.style.opacity = "1";
            });
        }, 300);
    }
    
    // Fixed pointer bounds matching array limits safely
    currentCarouselIndex = (currentCarouselIndex + 1) % tdxShowcaseData.length;
}

/**
 * Global Scroll Monitor & Interactive Handling System
 */
document.addEventListener("DOMContentLoaded", () => {
    // Fire up structural code rotating animation loop instantly
    if (tdxShowcaseData && tdxShowcaseData.length > 0) {
        rotateSyntaxShowcase();
        setInterval(rotateSyntaxShowcase, rotationIntervalTime);
    }
    
    const floatingBtn = document.getElementById("floatingBackToTop");
    const textAnchorBtn = document.getElementById("scrollTopAnchorBtn");
    
    // Track windows metrics to display floating arrow control layout
    window.addEventListener("scroll", () => {
        if (floatingBtn) {
            if (window.scrollY > 300) {
                floatingBtn.classList.add("visible");
            } else {
                floatingBtn.classList.remove("visible");
            }
        }
    });
    
    // Action behaviors to push standard views back smoothly to top
    const scrollToTopAction = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    
    if (floatingBtn) floatingBtn.addEventListener("click", scrollToTopAction);
    if (textAnchorBtn) textAnchorBtn.addEventListener("click", scrollToTopAction);
    
    // Make entire news entry selector box clickable safely
    const newsBox1 = document.getElementById("newsBox1");
    if (newsBox1) {
        newsBox1.addEventListener("click", () => {
            window.location.href = "news/1.html";
        });
    }
});