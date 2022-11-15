<!--
SPDX-FileCopyrightText: 2022 Jason Maassen (Netherlands eScience Center) <j.maassen@esciencecenter.nl>
SPDX-FileCopyrightText: 2022 Netherlands eScience Center

SPDX-License-Identifier: CC-BY-4.0
-->

# Adding a project

Before you can add a project, you will need have access to the RSD (see [How to get access](getting-access.md)) and [Sign in](getting-access.md#how-to-sign-in).

After signing in, use the __"+"__ button next to your avatar icon on the top right of the page, and select "New Project":

![image](/plus-software-projects.gif)

Before the project page is created, you must provide a __Title__ and __Subtitle__ for your project:

![image](/new-project.gif)

The RSD will automatically generate a *slug* for your project based on the project name you have provided. This slug will become part of the URL on which your project page can found. 
There is a small chance the generated slug is already in use by another project. If this is the case, an error will be show and you will need to change the slug resolve this conflict. 

::: warning
After you save the project page the slug can no longer be changed! You can still change the title or subtitle of the project however. 
::: 

Once you click __"save"__ the RSD will initialize a new empty project page. This page will not be public yet to give you some time to provide additional information.
Next, you can add additional information in the 7 sections explained below. 

## Project Information

![image](/basic-project-information.gif)

On this page, you can add and change the basic information about the project. This includes: 

- The **title** of the project
- A **subtitle** (which briefly explains the topic).
- An **image** illustrating the topic or goal of the project
- A **description** of the project (written in [markdown](https://www.markdownguide.org)).

In addition, the sidebar on the right shows: 

- The **publication status** 
- A **start date** and **end date**
- A **Grant ID**
- The **funding organization(s)** as listed in the RSD or the [ROR database](https://ror.org)
- A list of relevant **Project links** (such as a project web page, github organization, etc.)
- The **Research domain(s)** of this project (as defined by the [ERC](https://erc.europa.eu/news/new-erc-panel-structure-2021-and-2022))
- **Keywords** for this project

While entering this information, any changes you make are stored automatically. You can view the resulting page by clicking **view page** in the top right corner. 
Click the pencil icon in the top right to get back to the editing view. 

::: tip
Choose your **Title**, **Subtitle**, **Keywords** and **Research domains** wisely, as they are used by visitors of the RSD for searching and filtering content! 
:::

In the top right corner of the page, you can find a **"View page"** link, which you can use at any time to inspect the resulting project page: 

![image](/view-and-publish.gif)

The **"Published** slider can be use to make the page public once you are satisfied with the result.

To return to editing the page use the ![image](/edit-page.gif) link in the top right.

## Project Team

![image](/project-team-information.gif)

On this page, you can add team members to the project. Using the search bar on the left, you can search for persons registered in the RSD and [ORCID](https://orcid.org) databases 
using their name or ORCID. To add a team member, select the person from the drop down list of search results, or select "Add ...." to manually add a person if no information 
is found in the RSD or ORCID. 

Next, a pop up appears with the information available on this team member:

![image](/person-information.gif)

You can correct the available information and add any missing fields before adding this person to the team. The information stored about each team member is specific to this 
project. Therefore, you can safely change information about this person without having an effect on any other project the person is involved in. 

::: danger
When manually adding team members or adding images or email adresses of persons, please ensure you have **persmission** to share this information!
:::

## Contributing Organizations

![image](/project-add-organization.gif)

On this page, you can add participating organizations to the project. Using the search bar on the left, you can search for organizations listed in the RSD and [ROR](https://ror.org)
databases using their name or ROR identifier. To add a participating organization, select the organization from the drop down list of search results, or select "Add ...." to 
manually add an organization if no information is found in the RSD or ROR.

Next, a pop up appears with the information available on this organization:

![image](/project-add-organization-details.gif)

The information on organizations found in the RSD or ROR database are (mostly) **read-only**. When adding a new organization from ROR, you can only add a logo for this organization. 
All other information is retrieved automatically. 

::: warning
Regular users cannot update an organization after adding it to the RSD. Only the organization maintainer (for registered organizations) or the RSD administrators can update this 
information. Please [contact us](mailto:rsd@esciencecenter.nl) if you need to update organization information. 
:::

## Impact and Output

![image](/project-add-impact.gif)

In the next two sections, you can add **Impact** and **Output** to projects. These entries may consist of other research outputs such as publications, dataset, book sections, blogs, etc.
Where **Output** typically consists of research output being produced by the project team itself, **Impact** is generally triggered by events outside of the project, such as re-use of 
results in other projects, publications, or society, items in the media, etc.

To add items, the search bar on the left can be used to search the RSD, [Crossref](https://crossref.org), and [DataCite](https://datacite.org) databases using the **Title** or **DOI** 
of the research output. An item can be added by selecting it from the list of search results. The RSD will automatically classify the item based on the available metadata.

If needed, items without a DOI can also be added manually. After clicking **"Add"** a popup will appear to provide the details of this item.  

![image](/project-add-manual-mention.gif)

Each manually added item should at least have a **Title**, **Type** and **URL**. All other fields are optional. The **Note** field can be used to add a note to this item, and will not
be shown on the project page. 

::: warning
Please check if the information is complete and correct. A manual item can not be edited after it has been saved! 
:::

## Related topics

![image](/project-related-topics.gif)

The related topics section can be used to link related projects and software pages in the RSD to this project page. Items can be added by simply typing (part) of the name in either 
search bars, and selecting the desired item from the search result list. 

## Maintainers

TODO

## The finished page

Once you are satisfied with the information you have entered for each of the sections, you can publish the software page to make it publicly available. To do so, use the **"Published"**
slider on the information page and use the **"View page** link to admire the result:

![image](/published.gif)

Don't hesitate to update and extend the page later!





 













