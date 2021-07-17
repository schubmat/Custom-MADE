# Class Diagrams with TypeScript

After testing a few tools for generating class diagrams, nearly none of them have been considerate as working well.
The most suitable of them is called [classdiagram-ts](https://marketplace.visualstudio.com/items?itemName=AlexShen.classdiagram-ts) and is a VS-Code Extension. To install it, open VSCode and search for 
`"classdiagramm-ts"` or `"alexshen.classdiagram-ts"` in the Extensions tab and simply install it.
Afterwards right-click on any folder or file in the Explorer and click `Show Diagram`. 

Now a new file is opened, containing the auto generated diagram. The Nodes and Folders can be rearranged via Drag-and-Drop.

# Pros and Cons of `classdiagram-ts` (as of 17.07.2021)
## Pros
- (++) easy and fast to use
- (++) This tool is still unter development (most of the other tools are abandoned)
- (+) unlike most of the other tools (for TypeScript) this plugin nearly all* Classes / Functions / Interfaces / Objects *(as long as they are exported)
- (+) associations shown
- (+) class inheritance shown
- (+) diagrams can be exported as `.png`
- (+) when clicking on a file / attribute in teh diagram, VSCode opens the corresponding file / line 

## Cons
- (--) a lot of types are wrongly recognized as `object`
- (-) It does not recognize enums
- (-) the auto arrangement of the nodes is at least questionable and must nearly always be rearranged manually
- (-) the arrows are straight (dotted) and not changeable (line-style / directions)
- (-) no open source project available