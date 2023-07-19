# Navigating the RSD

![image](/landing-page.gif)

There are many ways to discover interesting research software on the RSD. The main starting points are: 

* The search bar (in the header)
* The software overview (reachable by clicking "Discover Software" or the "Software" link in the header) 
* The projects overview (reachable by clicking "Projects" in the header) 
* The organizations overview (reachable by clicking "Organizations" in the header) 

For more advanced users, we also offer a [REST API](/RSD-as-a-service/api.html), allowing you to use the RSD as a data source for other applications.

## Global search

Using the search bar in the header, you can perform a global search of all data in the RSD by simply providing a search term.
Currently, the search will match the following fields:

* the name of software, projects and organizations
* the short description of software and projects
* the keywords of software and projects
* the research domains of projects 

At the moment, we do not yet match on the long descriptions of software, projects and organizations, but we expect to do so in the future. 

## Software Overview

![image](/software-overview.gif)

The software overview page provides a list of all software in the RSD. For each software, a __card__ is shown with basic information: name, short description, last update,
number of mentions, and number of contributors. To browse and search for software of interest, the _filter and search_ bar on the top of the page can be used:

![image](/search-filter-bar.gif) 

Simply typing into the search bar will trigger the RSD to search for software containing (part of) the terms you entered. The name, short description and 
keywords are included in the search. Entering multiple words into the search bar will be interpreted as an __AND__. Only software containing all search terms will be shown as a result.

By default, 12 software cards are shown per page. This number can be increased if desired using the __Per page__ dropdown menu. The __<__ and __>__ icons can be used to move between pages. 

It is also possible to filter the software by keywords. By clicking the filter icon ![image](/filter-icon.gif) a filter popup will appear allowing you to select (or type) one or more 
keywords used by software in the RSD:

![image](/filter-keywords.gif) 

Selecting multiple keywords is interpreted as an __AND__. Only software using all of the selected keywords will be shown as a result. You can also combine the keyword filters with search 
terms to further reduce the selection.

## Project Overview

![image](/project-overview.gif)

The project overview page provides a list of all projects in the RSD. For each project, a __card__ is shown with basic information: name, short description, last update,
and if the project is running or completed. To browse and search for projects of interest, the _filter and search_ bar on the top of the page can be used:

![image](/search-filter-projects.gif) 

Simply typing into the search bar will trigger the RSD to search for projects containing (part of) the terms you entered. The name, short description, keywords, and research domains
are included in the search. Entering multiple words into the search bar will be interpreted as an __AND__. Only projects containing all search terms will be shown as a result.

By default, 12 project cards are shown per page. This number can be increased if desired using the __Per page__ dropdown menu. The __<__ and __>__ icons can be used to move between pages.

It is also possible to filter the projects by keywords and/or research domains. By clicking the filter icon ![image](/filter-icon.gif) a filter popup will appear allowing you to select 
(or type) one or more keywords and research domains used by projects in the RSD:

![image](/filter-keywords-domains.gif)

Selecting multiple keywords and research domains is interpreted as an __AND__. Only software using all of the selected keywords and research domains will be shown as a result. 
You can also combine the keyword filters with search terms to further reduce the selection.

## Organization Overview

![image](/organization-overview.gif)

The organization overview page provides a list of all organizations listed in the RSD. For each organization, a __card__ is shown basic information: name, logo, and the number of 
software and project pages which this organization participates in. 

For organizations which are a registered member of the RSD, the ![image](/registered-organization.gif) checkmark is shown on the card. If you wish to register your organization, you 
can find more information in [How to register an organization](register-organization.md).

To browse and search for organizations of interest, the _search_ bar on the top of the page can be used:

![image](/search-organizations.gif)

Simply typing into the search bar will trigger the RSD to search for organization whose name contains (part of) the terms you entered. Entering multiple words into the search bar will 
be interpreted as an __AND__. Only organizations whose name contains all search terms will be shown as a result.

By default, 12 organization cards are shown per page. This number can be increased if desired using the __Per page__ dropdown menu. The __<__ and __>__ icons can be used to move 
between pages.

