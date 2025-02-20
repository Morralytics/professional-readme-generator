// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT License':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
      break;
    case 'Apachie License 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
      break;
    case 'ISC License':
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]`
      break;
    case 'GNU PGLv2':
      return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]`
      break;
    case 'None':
      return ``
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT License':
      return `[MIT License](https://opensource.org/licenses/MIT)`
      break;
    case 'Apachie License 2.0':
      return `[Apachie License 2.0](https://opensource.org/licenses/Apache-2.0)`
      break;
    case 'ISC License':
      return `[ISC License](https://opensource.org/licenses/ISC)`
      break;
    case 'GNU PGLv2':
      return `[GNU PGLv2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
      break;
    case 'None':
      return ``
      break;
  }
}

function renderLicenseDescription(license) {
  switch(license) {
    case 'MIT License':
      return `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
      break;
    case 'Apachie License 2.0':
      return `Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
   
  http://www.apache.org/licenses/LICENSE-2.0
   
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`
      break;
    case 'ISC License':
      return `Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

`
      break;
    case 'GNU PGLv2':
      return `This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.
      
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
      
You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.`
      break;
    case 'None':
      return ``
      break;
  }
}

function renderLicenseSection(license) {
  return `${renderLicenseBadge(license)}
  
${renderLicenseLink(license)}`
}


function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseSection(data.license)}
## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)
    
* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

Copyright (C) 2023 <${data.git}>

${renderLicenseDescription(data.license)}

## Contributing

${data.contribution}

## Tests

${data.test}

## Questions

[Link to GitHub profile](https://github.com/${data.git})

With further questions you can reach me via email at:

${data.email}
`
}

module.exports = generateMarkdown;
