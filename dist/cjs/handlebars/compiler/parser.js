"use strict";
/* jshint ignore:start */
/* istanbul ignore next */
/* Jison generated parser */
var handlebars = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"root":3,"program":4,"EOF":5,"program_repetition0":6,"statement":7,"mustache":8,"block":9,"rawBlock":10,"partial":11,"content":12,"COMMENT":13,"CONTENT":14,"openRawBlock":15,"END_RAW_BLOCK":16,"OPEN_RAW_BLOCK":17,"sexpr":18,"CLOSE_RAW_BLOCK":19,"openBlock":20,"block_option0":21,"closeBlock":22,"openInverse":23,"block_option1":24,"OPEN_BLOCK":25,"openBlock_option0":26,"CLOSE":27,"OPEN_INVERSE":28,"openInverse_option0":29,"openInverseChain":30,"OPEN_INVERSE_CHAIN":31,"inverseAndProgram":32,"INVERSE":33,"inverseChain":34,"inverseChain_option0":35,"OPEN_ENDBLOCK":36,"path":37,"OPEN":38,"OPEN_UNESCAPED":39,"CLOSE_UNESCAPED":40,"OPEN_PARTIAL":41,"partialName":42,"param":43,"partial_option0":44,"partial_option1":45,"sexpr_repetition0":46,"sexpr_option0":47,"dataName":48,"STRING":49,"NUMBER":50,"BOOLEAN":51,"OPEN_SEXPR":52,"CLOSE_SEXPR":53,"hash":54,"hash_repetition_plus0":55,"hashSegment":56,"ID":57,"EQUALS":58,"blockParams":59,"OPEN_BLOCK_PARAMS":60,"blockParams_repetition_plus0":61,"CLOSE_BLOCK_PARAMS":62,"DATA":63,"pathSegments":64,"SEP":65,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",13:"COMMENT",14:"CONTENT",16:"END_RAW_BLOCK",17:"OPEN_RAW_BLOCK",19:"CLOSE_RAW_BLOCK",25:"OPEN_BLOCK",27:"CLOSE",28:"OPEN_INVERSE",31:"OPEN_INVERSE_CHAIN",33:"INVERSE",36:"OPEN_ENDBLOCK",38:"OPEN",39:"OPEN_UNESCAPED",40:"CLOSE_UNESCAPED",41:"OPEN_PARTIAL",49:"STRING",50:"NUMBER",51:"BOOLEAN",52:"OPEN_SEXPR",53:"CLOSE_SEXPR",57:"ID",58:"EQUALS",60:"OPEN_BLOCK_PARAMS",62:"CLOSE_BLOCK_PARAMS",63:"DATA",65:"SEP"},
productions_: [0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[12,1],[10,3],[15,3],[9,4],[9,4],[20,4],[23,4],[30,3],[32,2],[34,3],[34,1],[22,3],[8,3],[8,3],[11,5],[11,4],[18,3],[18,1],[43,1],[43,1],[43,1],[43,1],[43,1],[43,3],[54,1],[56,3],[59,3],[42,1],[42,1],[42,1],[48,2],[37,1],[64,3],[64,1],[6,0],[6,2],[21,0],[21,1],[24,0],[24,1],[26,0],[26,1],[29,0],[29,1],[35,0],[35,1],[44,0],[44,1],[45,0],[45,1],[46,0],[46,2],[47,0],[47,1],[55,1],[55,2],[61,1],[61,2]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: yy.prepareProgram($$[$0-1].statements, true); return $$[$0-1]; 
break;
case 2:this.$ = new yy.ProgramNode(yy.prepareProgram($$[$0]), null, {}, this._$);
break;
case 3:this.$ = $$[$0];
break;
case 4:this.$ = $$[$0];
break;
case 5:this.$ = $$[$0];
break;
case 6:this.$ = $$[$0];
break;
case 7:this.$ = $$[$0];
break;
case 8:this.$ = new yy.CommentNode(yy.stripComment($$[$0]), yy.stripFlags($$[$0], $$[$0]), this._$);
break;
case 9:this.$ = new yy.ContentNode($$[$0], this._$);
break;
case 10:this.$ = yy.prepareRawBlock($$[$0-2], $$[$0-1], $$[$0], this._$);
break;
case 11:this.$ = { sexpr: $$[$0-1] };
break;
case 12:this.$ = yy.prepareBlock($$[$0-3], $$[$0-2], $$[$0-1], $$[$0], false, this._$);
break;
case 13:this.$ = yy.prepareBlock($$[$0-3], $$[$0-2], $$[$0-1], $$[$0], true, this._$);
break;
case 14:this.$ = { sexpr: $$[$0-2], blockParams: $$[$0-1], strip: yy.stripFlags($$[$0-3], $$[$0]) };
break;
case 15:this.$ = { sexpr: $$[$0-2], blockParams: $$[$0-1], strip: yy.stripFlags($$[$0-3], $$[$0]) };
break;
case 16:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], yy.stripFlags($$[$0-2], $$[$0]), this._$);
break;
case 17:this.$ = { strip: yy.stripFlags($$[$0-1], $$[$0-1]), program: $$[$0] };
break;
case 18:
    var inverse = yy.prepareBlock($$[$0-2], $$[$0-1], $$[$0], $$[$0], false, this._$),
        program = new yy.ProgramNode(yy.prepareProgram([inverse]), null, {}, this._$);

    program.inverse = inverse;

    this.$ = { strip: $$[$0-2].strip, program: program, chain: true };
  
break;
case 19:this.$ = $$[$0];
break;
case 20:this.$ = {path: $$[$0-1], strip: yy.stripFlags($$[$0-2], $$[$0])};
break;
case 21:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], yy.stripFlags($$[$0-2], $$[$0]), this._$);
break;
case 22:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], yy.stripFlags($$[$0-2], $$[$0]), this._$);
break;
case 23:this.$ = new yy.PartialNode($$[$0-3], $$[$0-2], $$[$0-1], yy.stripFlags($$[$0-4], $$[$0]), this._$);
break;
case 24:this.$ = new yy.PartialNode($$[$0-2], undefined, $$[$0-1], yy.stripFlags($$[$0-3], $$[$0]), this._$);
break;
case 25:this.$ = new yy.SexprNode([$$[$0-2]].concat($$[$0-1]), $$[$0], this._$);
break;
case 26:this.$ = new yy.SexprNode([$$[$0]], null, this._$);
break;
case 27:this.$ = $$[$0];
break;
case 28:this.$ = new yy.StringNode($$[$0], this._$);
break;
case 29:this.$ = new yy.NumberNode($$[$0], this._$);
break;
case 30:this.$ = new yy.BooleanNode($$[$0], this._$);
break;
case 31:this.$ = $$[$0];
break;
case 32:$$[$0-1].isHelper = true; this.$ = $$[$0-1];
break;
case 33:this.$ = new yy.HashNode($$[$0], this._$);
break;
case 34:this.$ = [$$[$0-2], $$[$0]];
break;
case 35:this.$ = $$[$0-1];
break;
case 36:this.$ = new yy.PartialNameNode($$[$0], this._$);
break;
case 37:this.$ = new yy.PartialNameNode(new yy.StringNode($$[$0], this._$), this._$);
break;
case 38:this.$ = new yy.PartialNameNode(new yy.NumberNode($$[$0], this._$));
break;
case 39:this.$ = new yy.DataNode($$[$0], this._$);
break;
case 40:this.$ = new yy.IdNode($$[$0], this._$);
break;
case 41: $$[$0-2].push({part: $$[$0], separator: $$[$0-1]}); this.$ = $$[$0-2]; 
break;
case 42:this.$ = [{part: $$[$0]}];
break;
case 43:this.$ = [];
break;
case 44:$$[$0-1].push($$[$0]);
break;
case 59:this.$ = [];
break;
case 60:$$[$0-1].push($$[$0]);
break;
case 63:this.$ = [$$[$0]];
break;
case 64:$$[$0-1].push($$[$0]);
break;
case 65:this.$ = [$$[$0]];
break;
case 66:$$[$0-1].push($$[$0]);
break;
}
},
table: [{3:1,4:2,5:[2,43],6:3,13:[2,43],14:[2,43],17:[2,43],25:[2,43],28:[2,43],38:[2,43],39:[2,43],41:[2,43]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:[1,11],14:[1,18],15:16,17:[1,21],20:14,23:15,25:[1,19],28:[1,20],31:[2,2],33:[2,2],36:[2,2],38:[1,12],39:[1,13],41:[1,17]},{1:[2,1]},{5:[2,44],13:[2,44],14:[2,44],17:[2,44],25:[2,44],28:[2,44],31:[2,44],33:[2,44],36:[2,44],38:[2,44],39:[2,44],41:[2,44]},{5:[2,3],13:[2,3],14:[2,3],17:[2,3],25:[2,3],28:[2,3],31:[2,3],33:[2,3],36:[2,3],38:[2,3],39:[2,3],41:[2,3]},{5:[2,4],13:[2,4],14:[2,4],17:[2,4],25:[2,4],28:[2,4],31:[2,4],33:[2,4],36:[2,4],38:[2,4],39:[2,4],41:[2,4]},{5:[2,5],13:[2,5],14:[2,5],17:[2,5],25:[2,5],28:[2,5],31:[2,5],33:[2,5],36:[2,5],38:[2,5],39:[2,5],41:[2,5]},{5:[2,6],13:[2,6],14:[2,6],17:[2,6],25:[2,6],28:[2,6],31:[2,6],33:[2,6],36:[2,6],38:[2,6],39:[2,6],41:[2,6]},{5:[2,7],13:[2,7],14:[2,7],17:[2,7],25:[2,7],28:[2,7],31:[2,7],33:[2,7],36:[2,7],38:[2,7],39:[2,7],41:[2,7]},{5:[2,8],13:[2,8],14:[2,8],17:[2,8],25:[2,8],28:[2,8],31:[2,8],33:[2,8],36:[2,8],38:[2,8],39:[2,8],41:[2,8]},{18:22,37:23,48:24,57:[1,27],63:[1,26],64:25},{18:28,37:23,48:24,57:[1,27],63:[1,26],64:25},{4:29,6:3,13:[2,43],14:[2,43],17:[2,43],25:[2,43],28:[2,43],31:[2,43],33:[2,43],36:[2,43],38:[2,43],39:[2,43],41:[2,43]},{4:30,6:3,13:[2,43],14:[2,43],17:[2,43],25:[2,43],28:[2,43],33:[2,43],36:[2,43],38:[2,43],39:[2,43],41:[2,43]},{12:31,14:[1,18]},{37:33,42:32,49:[1,34],50:[1,35],57:[1,27],64:25},{5:[2,9],13:[2,9],14:[2,9],16:[2,9],17:[2,9],25:[2,9],28:[2,9],31:[2,9],33:[2,9],36:[2,9],38:[2,9],39:[2,9],41:[2,9]},{18:36,37:23,48:24,57:[1,27],63:[1,26],64:25},{18:37,37:23,48:24,57:[1,27],63:[1,26],64:25},{18:38,37:23,48:24,57:[1,27],63:[1,26],64:25},{27:[1,39]},{19:[2,59],27:[2,59],40:[2,59],46:40,49:[2,59],50:[2,59],51:[2,59],52:[2,59],53:[2,59],57:[2,59],60:[2,59],63:[2,59]},{19:[2,26],27:[2,26],40:[2,26],53:[2,26],60:[2,26]},{19:[2,40],27:[2,40],40:[2,40],49:[2,40],50:[2,40],51:[2,40],52:[2,40],53:[2,40],57:[2,40],60:[2,40],63:[2,40],65:[1,41]},{37:42,57:[1,27],64:25},{19:[2,42],27:[2,42],40:[2,42],49:[2,42],50:[2,42],51:[2,42],52:[2,42],53:[2,42],57:[2,42],60:[2,42],63:[2,42],65:[2,42]},{40:[1,43]},{21:44,30:46,31:[1,48],32:47,33:[1,49],34:45,36:[2,45]},{24:50,32:51,33:[1,49],36:[2,47]},{16:[1,52]},{27:[2,57],37:55,43:53,45:54,48:59,49:[1,56],50:[1,57],51:[1,58],52:[1,60],54:61,55:62,56:64,57:[1,63],63:[1,26],64:25},{27:[2,36],49:[2,36],50:[2,36],51:[2,36],52:[2,36],57:[2,36],63:[2,36]},{27:[2,37],49:[2,37],50:[2,37],51:[2,37],52:[2,37],57:[2,37],63:[2,37]},{27:[2,38],49:[2,38],50:[2,38],51:[2,38],52:[2,38],57:[2,38],63:[2,38]},{26:65,27:[2,49],59:66,60:[1,67]},{27:[2,51],29:68,59:69,60:[1,67]},{19:[1,70]},{5:[2,21],13:[2,21],14:[2,21],17:[2,21],25:[2,21],28:[2,21],31:[2,21],33:[2,21],36:[2,21],38:[2,21],39:[2,21],41:[2,21]},{19:[2,61],27:[2,61],37:55,40:[2,61],43:72,47:71,48:59,49:[1,56],50:[1,57],51:[1,58],52:[1,60],53:[2,61],54:73,55:62,56:64,57:[1,63],60:[2,61],63:[1,26],64:25},{57:[1,74]},{19:[2,39],27:[2,39],40:[2,39],49:[2,39],50:[2,39],51:[2,39],52:[2,39],53:[2,39],57:[2,39],60:[2,39],63:[2,39]},{5:[2,22],13:[2,22],14:[2,22],17:[2,22],25:[2,22],28:[2,22],31:[2,22],33:[2,22],36:[2,22],38:[2,22],39:[2,22],41:[2,22]},{22:75,36:[1,76]},{36:[2,46]},{4:77,6:3,13:[2,43],14:[2,43],17:[2,43],25:[2,43],28:[2,43],31:[2,43],33:[2,43],36:[2,43],38:[2,43],39:[2,43],41:[2,43]},{36:[2,19]},{18:78,37:23,48:24,57:[1,27],63:[1,26],64:25},{4:79,6:3,13:[2,43],14:[2,43],17:[2,43],25:[2,43],28:[2,43],36:[2,43],38:[2,43],39:[2,43],41:[2,43]},{22:80,36:[1,76]},{36:[2,48]},{5:[2,10],13:[2,10],14:[2,10],17:[2,10],25:[2,10],28:[2,10],31:[2,10],33:[2,10],36:[2,10],38:[2,10],39:[2,10],41:[2,10]},{27:[2,55],44:81,54:82,55:62,56:64,57:[1,83]},{27:[1,84]},{19:[2,27],27:[2,27],40:[2,27],49:[2,27],50:[2,27],51:[2,27],52:[2,27],53:[2,27],57:[2,27],60:[2,27],63:[2,27]},{19:[2,28],27:[2,28],40:[2,28],49:[2,28],50:[2,28],51:[2,28],52:[2,28],53:[2,28],57:[2,28],60:[2,28],63:[2,28]},{19:[2,29],27:[2,29],40:[2,29],49:[2,29],50:[2,29],51:[2,29],52:[2,29],53:[2,29],57:[2,29],60:[2,29],63:[2,29]},{19:[2,30],27:[2,30],40:[2,30],49:[2,30],50:[2,30],51:[2,30],52:[2,30],53:[2,30],57:[2,30],60:[2,30],63:[2,30]},{19:[2,31],27:[2,31],40:[2,31],49:[2,31],50:[2,31],51:[2,31],52:[2,31],53:[2,31],57:[2,31],60:[2,31],63:[2,31]},{18:85,37:23,48:24,57:[1,27],63:[1,26],64:25},{27:[2,58]},{19:[2,33],27:[2,33],40:[2,33],53:[2,33],56:86,57:[1,83],60:[2,33]},{19:[2,42],27:[2,42],40:[2,42],49:[2,42],50:[2,42],51:[2,42],52:[2,42],53:[2,42],57:[2,42],58:[1,87],60:[2,42],63:[2,42],65:[2,42]},{19:[2,63],27:[2,63],40:[2,63],53:[2,63],57:[2,63],60:[2,63]},{27:[1,88]},{27:[2,50]},{57:[1,90],61:89},{27:[1,91]},{27:[2,52]},{14:[2,11]},{19:[2,25],27:[2,25],40:[2,25],53:[2,25],60:[2,25]},{19:[2,60],27:[2,60],40:[2,60],49:[2,60],50:[2,60],51:[2,60],52:[2,60],53:[2,60],57:[2,60],60:[2,60],63:[2,60]},{19:[2,62],27:[2,62],40:[2,62],53:[2,62],60:[2,62]},{19:[2,41],27:[2,41],40:[2,41],49:[2,41],50:[2,41],51:[2,41],52:[2,41],53:[2,41],57:[2,41],60:[2,41],63:[2,41],65:[2,41]},{5:[2,12],13:[2,12],14:[2,12],17:[2,12],25:[2,12],28:[2,12],31:[2,12],33:[2,12],36:[2,12],38:[2,12],39:[2,12],41:[2,12]},{37:92,57:[1,27],64:25},{30:46,31:[1,48],32:47,33:[1,49],34:94,35:93,36:[2,53]},{27:[1,95]},{36:[2,17]},{5:[2,13],13:[2,13],14:[2,13],17:[2,13],25:[2,13],28:[2,13],31:[2,13],33:[2,13],36:[2,13],38:[2,13],39:[2,13],41:[2,13]},{27:[1,96]},{27:[2,56]},{58:[1,87]},{5:[2,24],13:[2,24],14:[2,24],17:[2,24],25:[2,24],28:[2,24],31:[2,24],33:[2,24],36:[2,24],38:[2,24],39:[2,24],41:[2,24]},{53:[1,97]},{19:[2,64],27:[2,64],40:[2,64],53:[2,64],57:[2,64],60:[2,64]},{37:55,43:98,48:59,49:[1,56],50:[1,57],51:[1,58],52:[1,60],57:[1,27],63:[1,26],64:25},{13:[2,14],14:[2,14],17:[2,14],25:[2,14],28:[2,14],31:[2,14],33:[2,14],36:[2,14],38:[2,14],39:[2,14],41:[2,14]},{57:[1,100],62:[1,99]},{57:[2,65],62:[2,65]},{13:[2,15],14:[2,15],17:[2,15],25:[2,15],28:[2,15],33:[2,15],36:[2,15],38:[2,15],39:[2,15],41:[2,15]},{27:[1,101]},{36:[2,18]},{36:[2,54]},{13:[2,16],14:[2,16],17:[2,16],25:[2,16],28:[2,16],31:[2,16],33:[2,16],36:[2,16],38:[2,16],39:[2,16],41:[2,16]},{5:[2,23],13:[2,23],14:[2,23],17:[2,23],25:[2,23],28:[2,23],31:[2,23],33:[2,23],36:[2,23],38:[2,23],39:[2,23],41:[2,23]},{19:[2,32],27:[2,32],40:[2,32],49:[2,32],50:[2,32],51:[2,32],52:[2,32],53:[2,32],57:[2,32],60:[2,32],63:[2,32]},{19:[2,34],27:[2,34],40:[2,34],53:[2,34],57:[2,34],60:[2,34]},{27:[2,35]},{57:[2,66],62:[2,66]},{5:[2,20],13:[2,20],14:[2,20],17:[2,20],25:[2,20],28:[2,20],31:[2,20],33:[2,20],36:[2,20],38:[2,20],39:[2,20],41:[2,20]}],
defaultActions: {4:[2,1],45:[2,46],47:[2,19],51:[2,48],61:[2,58],66:[2,50],69:[2,52],70:[2,11],79:[2,17],82:[2,56],93:[2,18],94:[2,54],99:[2,35]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == "undefined")
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === "function")
        this.parseError = this.yy.parseError;
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == "undefined") {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
            var errStr = "";
            if (!recovering) {
                expected = [];
                for (p in table[state])
                    if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                    }
                if (this.lexer.showPosition) {
                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                } else {
                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                }
                this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0)
                    recovering--;
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
            if (ranges) {
                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== "undefined") {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}
};
/* Jison generated lexer */
var lexer = (function(){
var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        if (this.options.ranges) this.yylloc.range = [0,0];
        this.offset = 0;
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) this.yylloc.range[1]++;

        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length-1);
        this.matched = this.matched.substr(0, this.matched.length-1);

        if (lines.length-1) this.yylineno -= lines.length-1;
        var r = this.yylloc.range;

        this.yylloc = {first_line: this.yylloc.first_line,
          last_line: this.yylineno+1,
          first_column: this.yylloc.first_column,
          last_column: lines ?
              (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
              this.yylloc.first_column - len
          };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
less:function (n) {
        this.unput(this.match.slice(n));
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/(?:\r\n?|\n).*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
            this.yytext += match[0];
            this.match += match[0];
            this.matches = match;
            this.yyleng = this.yytext.length;
            if (this.options.ranges) {
                this.yylloc.range = [this.offset, this.offset += this.yyleng];
            }
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (this.done && this._input) this.done = false;
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    }});
lexer.options = {};
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {


function strip(start, end) {
  return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng-end);
}


var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0:
                                   if(yy_.yytext.slice(-2) === "\\\\") {
                                     strip(0,1);
                                     this.begin("mu");
                                   } else if(yy_.yytext.slice(-1) === "\\") {
                                     strip(0,1);
                                     this.begin("emu");
                                   } else {
                                     this.begin("mu");
                                   }
                                   if(yy_.yytext) return 14;
                                 
break;
case 1:return 14;
break;
case 2:
                                   this.popState();
                                   return 14;
                                 
break;
case 3:
                                  yy_.yytext = yy_.yytext.substr(5, yy_.yyleng-9);
                                  this.popState();
                                  return 16;
                                 
break;
case 4: return 14; 
break;
case 5:
  this.popState();
  return 13;

break;
case 6:return 52;
break;
case 7:return 53;
break;
case 8: return 17; 
break;
case 9:
                                  this.popState();
                                  this.begin('raw');
                                  return 19;
                                 
break;
case 10:return 41;
break;
case 11:return 25;
break;
case 12:return 36;
break;
case 13:this.popState(); return 33;
break;
case 14:this.popState(); return 33;
break;
case 15:return 28;
break;
case 16:return 31;
break;
case 17:return 39;
break;
case 18:return 38;
break;
case 19:
  this.unput(yy_.yytext);
  this.popState();
  this.begin('com');

break;
case 20:
  this.popState();
  return 13;

break;
case 21:return 38;
break;
case 22:return 58;
break;
case 23:return 57;
break;
case 24:return 57;
break;
case 25:return 65;
break;
case 26:// ignore whitespace
break;
case 27:this.popState(); return 40;
break;
case 28:this.popState(); return 27;
break;
case 29:yy_.yytext = strip(1,2).replace(/\\"/g,'"'); return 49;
break;
case 30:yy_.yytext = strip(1,2).replace(/\\'/g,"'"); return 49;
break;
case 31:return 63;
break;
case 32:return 51;
break;
case 33:return 51;
break;
case 34:return 50;
break;
case 35:return 60;
break;
case 36:return 62;
break;
case 37:return 57;
break;
case 38:yy_.yytext = strip(1,2); return 57;
break;
case 39:return 'INVALID';
break;
case 40:return 5;
break;
}
};
lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];
lexer.conditions = {"mu":{"rules":[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],"inclusive":false},"emu":{"rules":[2],"inclusive":false},"com":{"rules":[5],"inclusive":false},"raw":{"rules":[3,4],"inclusive":false},"INITIAL":{"rules":[0,1,40],"inclusive":true}};
return lexer;})()
parser.lexer = lexer;
function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();exports["default"] = handlebars;
/* jshint ignore:end */