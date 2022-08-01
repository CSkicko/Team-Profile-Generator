function createTemplate(details){
    const fs = require('fs');
    // Set first part of html code
    const htmlPart1 = `<!DOCTYPE html>
                        <html lang="en">
                        
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                            <title>My Team Profile</title>
                        </head>
                        
                        <body>
                            <header>
                                <nav class="navbar navbar-light bg-primary p-5 mb-5 justify-content-center">
                                    <a class="navbar-brand text-light" href="">My Team Profile</a>
                                </nav>
                            </header>
                        
                            <div class="container">
                                <div class="row justify-content-center">`;
    
    // Set second part of html code
    let htmlPart2 = [];
    for(employee of details){
        const type = employee.getRole();
        let icon;
        const name = employee.getName();
        const id = employee.getId();
        const email = employee.getEmail();
        let variableInfo; 

        // Set icon and variable info based on type of employee
        switch(type) {
            case "Manager":
                icon = '<i class="fa-solid fa-mug-hot p-1"></i>';
                variableInfo = `Office Number: ${employee.officeNo}`;
                break;
            case "Engineer":
                icon = '<i class="fa-solid fa-glasses p-1"></i>';
                variableInfo = `Github Account: <a target = '_blank' href='https://github.com/${employee.github}'>${employee.github}</a>`;
                break;
            case "Intern":
                icon = '<i class="fa-solid fa-graduation-cap p-1"></i>';
                variableInfo = `School: ${employee.school}`;
                break;
        }

        htmlPart2.push(`<div class="col-4">
                        <div class="card mb-4">
                            <div class="card-body bg-info">
                                <h5 class="card-title text-light">${name}</h5>
                                <h6 class="card-subtitle mb-2 text-light">${icon}${type}</h6>
                                <ul class="list-group">
                                    <li class="list-group-item">ID: ${id}</li>
                                    <li class="list-group-item">Email: <a href='mailto:${email}'>${email}</a></li>
                                    <li class="list-group-item">${variableInfo}</li>
                                </ul>
                            </div>
                        </div>
                    </div>`);
    }
    
    // Set third part of html code
    const htmlPart3 = `</div></div></body></html>`;

    const html = (htmlPart1 + [...htmlPart2] + htmlPart3);
    fs.writeFileSync('./dist/index.html', html);
};

module.exports = createTemplate;