(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{464:function(t,e,s){"use strict";s.r(e);var a=s(50),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"komodo-developer-path-connecting-to-another-programming-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#komodo-developer-path-connecting-to-another-programming-environment"}},[t._v("#")]),t._v(" Komodo Developer Path | Connecting to Another Programming Environment")]),t._v(" "),s("h4",{attrs:{id:"total-estimated-time-10-20-minutes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#total-estimated-time-10-20-minutes"}},[t._v("#")]),t._v(" Total Estimated Time: ~10-20 Minutes")]),t._v(" "),s("p",[t._v("This tutorial is part of a series.")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/basic-docs/antara/antara-tutorials/beginner-series-part-2.html"}},[t._v("To return to the previous tutorial, click here.")])],1),t._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[t._v("Until now we have relied on automated functions in the guided tutorials for assistance in executing Remote Procedure Calls (RPC's). Such RPC's include "),s("b",[t._v("getinfo")]),t._v(", "),s("b",[t._v("listunspent")]),t._v(", "),s("b",[t._v("faucetfund")]),t._v(", and more.")]),t._v(" "),s("p",[t._v("The very purpose of an RPC is to allow another programming environment to access the functionality of the software. For example, an RPC allows Python or JavaScript source code to send a secure call to the Komodo Smart Chain with a request to perform an action, and to return information about the result.")]),t._v(" "),s("p",[t._v("All RPC's are available in any mainstream programming language, and we are now prepared to experiment with this feature.")]),t._v(" "),s("p",[t._v("In this tutorial, we focus on the most essential aspect of this process, the Unix "),s("code",[t._v("curl")]),t._v(" command. Using "),s("code",[t._v("curl")]),t._v(" to access Komodo software from the source code of another environment is relatively straightforward, depending upon the programming language itself.")]),t._v(" "),s("p",[t._v("The guided-tutorial software that holds our "),s("code",[t._v("TUT1")]),t._v(" Smart Chain has an exposed RPC port that we use to connect to our seed node.")]),t._v(" "),s("h4",{attrs:{id:"inquiring-about-language-wrappers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inquiring-about-language-wrappers"}},[t._v("#")]),t._v(" Inquiring About Language Wrappers")]),t._v(" "),s("p",[t._v("Before we continue with the tutorial, there is a tangential point to mention.")]),t._v(" "),s("p",[t._v("In the Komodo community, for many popular programming languages there are available enhancements beyond the "),s("code",[t._v("curl")]),t._v(" command. These enhancements allow a developer to more easily integrate with Komodo.")]),t._v(" "),s("p",[t._v('In these languages, someone from the Komodo community has created a language "wrapper." A wrapper essentially allows a developer to import all the Komodo RPC calls directly into the source files of their chosen language.')]),t._v(" "),s("p",[t._v("Therefore, the developer can often simply call the Komodo RPC suite into the source file and access each RPC on demand.")]),t._v(" "),s("p",[t._v("For information regarding availability of language wrappers for your preferred language, please reach out to our team and to the community on "),s("a",{attrs:{href:"https://komodoplatform.com/discord",target:"_blank",rel:"noopener noreferrer"}},[t._v("Discord."),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"obtaining-the-necessary-passwords-and-credentials"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#obtaining-the-necessary-passwords-and-credentials"}},[t._v("#")]),t._v(" Obtaining the Necessary Passwords and Credentials")]),t._v(" "),s("h5",{attrs:{id:"estimated-time-1-minute"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#estimated-time-1-minute"}},[t._v("#")]),t._v(" Estimated Time: 1 minute")]),t._v(" "),s("p",[t._v("The Smart Chain software controls access to all your valuable assets. Allowing other software on your node to access and manipulate these assets is a potential security risk. Therefore, the Smart Chain software requires a password and username from any software that attempts to access the Smart Chain's exposed port.")]),t._v(" "),s("p",[t._v("These credentials are called the rpcpassword, rpcuser, and rpcport.")]),t._v(" "),s("p",[t._v("The file that holds these values is typically installed in a "),s("code",[t._v("~/komodo/COINNAME/COINNAME.conf")]),t._v(" file. You can change the values in this file before launching the Komodo software, and they will be loaded at runtime.")]),t._v(" "),s("p",[t._v("In our guided tutorial, the name of our coin is "),s("code",[t._v("TUT1")]),t._v(", and therefore the name of the credential file is "),s("code",[t._v("TUT1.conf")]),t._v(".")]),t._v(" "),s("p",[t._v("We have placed the "),s("code",[t._v("TUT1.conf")]),t._v(" file for the "),s("code",[t._v("SEED")]),t._v(" node in a different location, to allow for the underlying tutorial software to function properly.")]),t._v(" "),s("p",[t._v("Here is the location: "),s("code",[t._v("/root/.komodo/TUT1/TUT1.conf")])]),t._v(" "),s("p",[t._v("Obtain your "),s("code",[t._v("TUT1")]),t._v(" RPC credentials and copy/paste them into a nearby location before continuing with the tutorial.")]),t._v(" "),s("h2",{attrs:{id:"using-curl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-curl"}},[t._v("#")]),t._v(" Using curl")]),t._v(" "),s("h5",{attrs:{id:"estimated-time-5-minutes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#estimated-time-5-minutes"}},[t._v("#")]),t._v(" Estimated Time: 5 minutes")]),t._v(" "),s("h4",{attrs:{id:"conceptualizing-the-curl-command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conceptualizing-the-curl-command"}},[t._v("#")]),t._v(" Conceptualizing the curl Command")]),t._v(" "),s("p",[t._v("A "),s("code",[t._v("curl")]),t._v(" command must be sent to the Komodo software daemon through a Unix shell, or terminal.")]),t._v(" "),s("p",[t._v("When using "),s("code",[t._v("curl")]),t._v(" from another programming environment, the developer's source code first opens an instance of a Unix terminal. This is typically achieved through some type of environment enhancement. For example, a JavaScript developer might use Node.js to open a Unix terminal instance. The specific Node.js function the developer would use is "),s("a",{attrs:{href:"https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback",target:"_blank",rel:"noopener noreferrer"}},[s("b",[t._v("child_process.exec().")]),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("The developer's source file then creates a "),s("code",[t._v("curl")]),t._v(" command that fulfills the intended purposes of the developer's software, and sends this "),s("code",[t._v("curl")]),t._v(" command to the Komodo software daemon.")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("curl")]),t._v(" command sends a json reply, which the developer captures in their source code and utilizes in any manner the developer desires.")]),t._v(" "),s("h4",{attrs:{id:"installing-jq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-jq"}},[t._v("#")]),t._v(" Installing jq")]),t._v(" "),s("p",[t._v("The returned json object is provided without human-friendly json formatting.")]),t._v(" "),s("p",[t._v('To make json responses easier to read, Komodo developers typically make use of a third-party software called "jq".')]),t._v(" "),s("p",[s("a",{attrs:{href:"https://stedolan.github.io/jq/",target:"_blank",rel:"noopener noreferrer"}},[t._v("You can download and install jq at this link."),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Once installed, with each "),s("code",[t._v("curl")]),t._v(" command simply include a pipe and a call to jq, along with any desired jq optional parameters. Komodo developers typically include the  "),s("code",[t._v("-r")]),t._v(" parameter for raw outputs, to help jq interpret the raw string.")]),t._v(" "),s("h2",{attrs:{id:"the-anatomy-of-a-curl-command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-anatomy-of-a-curl-command"}},[t._v("#")]),t._v(" The Anatomy of a curl Command")]),t._v(" "),s("p",[t._v("Observe the anatomy of a sample "),s("code",[t._v("curl")]),t._v(" command, as executed in the terminal. For this example, we use the "),s("b",[t._v("getinfo")]),t._v(" RPC.")]),t._v(" "),s("h4",{attrs:{id:"command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command"}},[t._v("#")]),t._v(" Command")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -s --user user3044755432:passd30f503069f140e8e0ffe4d3f1645a8eae8e923b20e6011630cc98880ec5c47320 --data-binary "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{'),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("jsonrpc"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("1.0"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("id"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("curl test"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("getinfo"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("params"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(': []}"')]),t._v(" -H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-type: text/plain;'")]),t._v(" http://127.0.0.1:9253/ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" jq -r "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.result'")]),t._v("\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("Property")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("curl")]),t._v(" "),s("td",[t._v("the name of the Unix command")])]),t._v(" "),s("tr",[s("td",[t._v("-s")]),t._v(" "),s("td",[t._v('the "silent" option; this prevents the shell from returning extraneous information about the command\'s progress')])]),t._v(" "),s("tr",[s("td",[t._v("--user")]),t._v(" "),s("td",[t._v("informs the shell that there will be a username and a password directly following this property")])]),t._v(" "),s("tr",[s("td",[t._v("userXXXX:passXXXX")]),t._v(" "),s("td",[t._v("the rpcuser and rpcpassword, as provided in the coin's .conf file")])]),t._v(" "),s("tr",[s("td",[t._v("--data-binary")]),t._v(" "),s("td",[t._v("informs the shell that additional data should be included with the curl command, and that the data should be sent exactly as it is provided")])]),t._v(" "),s("tr",[s("td",[t._v('"{')]),t._v(" "),s("td",[t._v("begin the string that contains the data object; everything within this string is sent directly to the Komodo daemon for processing")])]),t._v(" "),s("tr",[s("td",[t._v('"jsonrpc": "1.0"')]),t._v(" "),s("td",[t._v("informs the Komodo daemon that it is receiving a json rpc object, and that the object is formatted according to version 1.0 of the Komodo RPC's source code")])]),t._v(" "),s("tr",[s("td",[t._v('"id": "curl test"')]),t._v(" "),s("td",[t._v("informs the daemon that the json object sent is a curl command")])]),t._v(" "),s("tr",[s("td",[t._v('"method": "getinfo"')]),t._v(" "),s("td",[t._v("informs the daemon that the developer is using the "),s("RouterLink",{attrs:{to:"/basic-docs/smart-chains/smart-chain-api/control.html#getinfo"}},[s("b",[t._v("getinfo")])]),t._v(" RPC")],1)]),t._v(" "),s("tr",[s("td",[t._v('"params": []')]),t._v(" "),s("td",[t._v("provides the required or optional parameters that accompany the Komodo RPC; in this case, the "),s("b",[t._v("getinfo")]),t._v(" RPC does not have any parameters, and therefore the array is empty")])]),t._v(" "),s("tr",[s("td",[t._v('}"')]),t._v(" "),s("td",[t._v("end of the string that contains the data object")])]),t._v(" "),s("tr",[s("td",[t._v("-H")]),t._v(" "),s("td",[t._v("informs the shell that there is an extra http header to include")])]),t._v(" "),s("tr",[s("td",[t._v("'content-type: text/plain;'")]),t._v(" "),s("td",[t._v("the http character set parameter; states that the header is provided in plain-text format")])]),t._v(" "),s("tr",[s("td",[t._v("http://127.0.0.1:9253/")]),t._v(" "),s("td",[t._v("the http destination. The 127.0.0.1 tells the shell to serve the content to the node's localhost server. The :9253 extension is the rpcport, as provided in the coin's .conf file")])]),t._v(" "),s("tr",[s("td",[t._v("| jq -r")]),t._v(" "),s("td",[t._v("instructs the shell to pipe the response through the jq software; the -r instruction informs jq that this is a raw object")])])])]),t._v(" "),s("p",[t._v("The response to the "),s("b",[t._v("getinfo")]),t._v(" RPC "),s("code",[t._v("curl")]),t._v(" command is as follows. Note that this is a json string and the developer must actively convert the response into a json object. For example, in JavaScript the appropriate function is "),s("code",[t._v("JSON.parse()")]),t._v(".")]),t._v(" "),s("h4",{attrs:{id:"response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2001526")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocolversion"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("170007")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"KMDversion"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.4.0a"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"synced"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"notarized"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"prevMoMheight"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"notarizedhash"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0000000000000000000000000000000000000000000000000000000000000000"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"notarizedtxid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0000000000000000000000000000000000000000000000000000000000000000"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"notarizedtxid_height"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mempool"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"KMDnotarized_height"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"notarized_confirms"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"walletversion"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"balance"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"blocks"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"longestchain"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timeoffset"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tiptime"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1231006505")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"connections"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"proxy"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"difficulty"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"testnet"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"keypoololdest"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1561227622")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"keypoolsize"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("101")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"paytxfee"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"relayfee"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1e-06")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"errors"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pubkey"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"030746f79b31d1bb46aa10ee8ee72a06eba7375ca0aca411fa684936457363cdad"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"CCid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TUT1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sapling"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("-1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"p2pport"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9252")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rpcport"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9253")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"magic"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("230635964")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"premine"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"mine-on-the-seed-node-using-curl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mine-on-the-seed-node-using-curl"}},[t._v("#")]),t._v(" Mine on the Seed Node Using curl")]),t._v(" "),s("p",[t._v("Use "),s("code",[t._v("curl")]),t._v(" to tell the "),s("code",[t._v("SEED")]),t._v(" node to begin mining the "),s("code",[t._v("TUT1")]),t._v(" Smart Chain. Use the "),s("RouterLink",{attrs:{to:"/basic-docs/smart-chains/smart-chain-api/generate.html#setgenerate"}},[s("b",[t._v("setgenerate")])]),t._v(" RPC for this function.")],1),t._v(" "),s("p",[t._v("Note that this RPC requires parameters in the "),s("code",[t._v("curl")]),t._v(" command: "),s("code",[t._v('\\"params\\": [true,1]')])]),t._v(" "),s("h4",{attrs:{id:"command-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command-2"}},[t._v("#")]),t._v(" Command")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -s --user user3044755432:passd30f503069f140e8e0ffe4d3f1645a8eae8e923b20e6011630cc98880ec5c47320 --data-binary "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{'),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("jsonrpc"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("1.0"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("id"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("curl test"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("setgenerate"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("params"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(': [true,1]}"')]),t._v(" -H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-type: text/plain;'")]),t._v(" http://127.0.0.1:9253/ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" jq -r "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.result'")]),t._v("\n")])])]),s("p",[t._v("The "),s("b",[t._v("setgenerate")]),t._v(" RPC always returns "),s("code",[t._v("null")]),t._v(" as a response.")]),t._v(" "),s("h4",{attrs:{id:"response-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[t._v("#")]),t._v(" Response")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),t._v("\n")])])]),s("h2",{attrs:{id:"discover-the-state-of-mining-on-the-seed-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#discover-the-state-of-mining-on-the-seed-node"}},[t._v("#")]),t._v(" Discover the State of Mining on the Seed Node")]),t._v(" "),s("p",[t._v("Use the "),s("RouterLink",{attrs:{to:"/basic-docs/smart-chains/smart-chain-api/mining.html#getmininginfo"}},[s("b",[t._v("getmininginfo")])]),t._v(" RPC to ensure that the command executed successfully.")],1),t._v(" "),s("h4",{attrs:{id:"command-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command-3"}},[t._v("#")]),t._v(" Command")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -s --user user3044755432:passd30f503069f140e8e0ffe4d3f1645a8eae8e923b20e6011630cc98880ec5c47320 --data-binary "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{'),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("jsonrpc"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("1.0"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("id"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("curl test"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("getmininginfo"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("params"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(': []}"')]),t._v(" -H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-type: text/plain;'")]),t._v(" http://127.0.0.1:9253/ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" jq -r "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.result'")]),t._v("                  \n")])])]),s("h4",{attrs:{id:"response-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-3"}},[t._v("#")]),t._v(" Response")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"blocks"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"currentblocksize"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"currentblocktx"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"difficulty"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"errors"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"genproclimit"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"localsolps"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.041666666666667")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"networksolps"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"networkhashps"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pooledtx"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"testnet"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"chain"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"staking"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"generate"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"numthreads"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"stop-mining-on-the-seed-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stop-mining-on-the-seed-node"}},[t._v("#")]),t._v(" Stop Mining on the Seed Node")]),t._v(" "),s("p",[t._v("To instruct the node to cease mining, we again use the "),s("RouterLink",{attrs:{to:"/basic-docs/smart-chains/smart-chain-api/generate.html#setgenerate"}},[s("b",[t._v("setgenerate")])]),t._v(" RPC, but this time we provide the parameter as "),s("code",[t._v("false")]),t._v(".")],1),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -s --user user3044755432:passd30f503069f140e8e0ffe4d3f1645a8eae8e923b20e6011630cc98880ec5c47320 --data-binary "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{'),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("jsonrpc"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("1.0"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("id"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("curl test"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("setgenerate"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("params"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(': [false]}"')]),t._v(" -H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-type: text/plain;'")]),t._v(" http://127.0.0.1:9253/ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" jq -r "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.result'")]),t._v("       \n")])])]),s("h4",{attrs:{id:"response-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-4"}},[t._v("#")]),t._v(" Response")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("null\n")])])]),s("hr"),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/basic-docs/antara/antara-tutorials/beginner-series-part-4.html#introduction"}},[t._v("Proceed to next tutorial article in the series.")])],1)])}),[],!1,null,null,null);e.default=r.exports}}]);