<!--
SPDX-FileCopyrightText: 2022 Jesús García Gonzalez (Netherlands eScience Center) <j.g.gonzalez@esciencecenter.nl>
SPDX-FileCopyrightText: 2022 Netherlands eScience Center

SPDX-License-Identifier: CC-BY-4.0
-->

# Adding software

To add software to your profile on the RSD, you can use the "+" button next to your profile button, on the top right of the page, and from the drop down menu select "New Software":

![image](/new-software.gif)

To create a new software page, you must provide a name for your software and a short description of what it does. Once you click "save" the RSD will use this information to initialize a new empty software page. It will not be public yet, to give you some time to provide additional information.

Next, you can add additional information in the 7 sections explained below. 

## Software information

In this section you can provide the basic information about the software: 

- A **Getting started URL** which refers to webpage with more information about the software. This is shown as the "getting started" button on the software page. 
- A **Source code repository URL** of the software. This link will show up as a repository icon on the software page and will be used to harvest information about the software development activity, which will be shown as a graph. At the moment we support [github](), [gitlab]() and have limited support for [bitbucket](). 
- A more extensive **Description** of the software, which will be shown on the software page. You can use markdown to write this description, or import an existing markdown file from the web.
- A **concept DOI** for the archived releases of the software. This concept DOI will be used to automatically detect new releases of your software, and generate the block with citation information shown on the software page. You can find more information on concept DOIs and how to create them [here]().
- *Keyword*s describing the software. These will be shown in the sidebar of the software page. If you have provided a concept DOI, the keywords can also be imported from the archive metadata. 
- The **License** of the software. This will be shown in the sidebar of the software page. If you have provided a concept DOI, the license can also be imported from the archive metadata. 

![image](/software-information.gif)

## Contributors

In this section, you can provide more information on who contributed to the software. This section can be used to list the developers, designers, community managers, etc. If you 
have provided a **concept DOI** in the previous section, you can import the contributors from the DOI metadata by clicking the "import contributors" button. Alternatively / 
additionally you can use the search bar underneath "Add contributor" to search for people already registered in the RSD or [ORCID](https://orcid.org) database. If needed, you can 
add a role and affiliation to the contributor, and select one contributor as a "contact person" for the software.

![image](/contributors.gif)

The contributors you add will show up in the contributors section of the software page.

## Organizations

In this section, you can list which organizations contributed to the developement of the software. You can use the search bar underneath "Add organization" to search for 
organizations already registered in the RSD or in the [ROR](https://ROR.org) database. 

![image](/organizations.gif)

## Mentions

This section allows you to add mentions to your software page. You can use this to list publications, presentations, videos, blogs, etc. that prominently feature your software, or the results produced by your software. 
To add a mention, you can use the search bar below "Find publication" to search for a DOI or publication title in the RSD, [Crossref](https://www.crossref.org/) or [Datacite](https://datacite.org/). All the relevant data about the publication will be retrieved automatically. For publications without a DOI (typically blogs or webpages), it is also possible to manually add a mention.  

![image](/mentions.gif)

## Testimonials

This section allows user testimonials to be added to the software page. A testimonial consist of a quote and a source. 

![image](/testimonials.gif)

## The finished page

Once you are satisfied with the data you have entered for the different sections, you can publish the software page to make it publicly available. Don't hesitate to update and extend the page later!

![image](/finale.gif)

## Maintainers

TODO
