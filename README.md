# Project Introduction: Addressing the Frontend Engineering Bottleneck

## Problem Statement

Web development in the modern interface is marked by its expense, primarily due to the lack of standardization in visual interface development. While other proprietary technologies like C# and Java have enjoyed stability, the open nature of JavaScript and the web ecosystem has led to a proliferation of opportunities and challenges. However, the absence of a standardized approach to graphical user interfaces has hindered efficiency and innovation in the field.

Despite the demand and potential for improvement, organizations have largely neglected investing time and effort in finding efficient solutions for interface development. Graphical user interfaces have been a longstanding challenge, dating back to the 1970s. However, the lack of standardization stemmed from a failure to recognize the commonalities in technology, resulting in divergent approaches to dominance in the market.

## Design to Code Theorem: A Mathematical Formulation

Let *D* be the set of all designs, where each design *d* is represented as a rectangle. Each rectangle in *D* may contain sub-rectangles and content.

Let *C* be the set of all code, where each code *c* is a rendering process that transforms a design rectangle into a corresponding visual representation.

### Statements:

1. **Design Representation:**
   - Designs, denoted as *d ∈ D*, are rectangles, where *d = (width, height)*, and may contain sub-designs or content.

2. **Content in Designs:**
   - Content within a rectangle in the set *D* can be image, video, or text.

3. **Code Rendering Process:**
   - Code, represented as *c ∈ C*, is a function that maps a design rectangle *d* to its visual representation, denoted as *c(d)*.

### Mathematical Formulation:

1. **Existence of Designs:**
   - For any design *d ∈ D*, there exists a rectangle representing a visual concept:
     - \(d = (width, height)\)

2. **Design Hierarchy:**
   - Designs can be hierarchical, where a design *d* may contain sub-designs or content:
     - \(d = (width, height, \{sub\_designs\}, \{content\})\)

3. **Code Rendering Process:**
   - The rendering process *c* is a function that maps a design rectangle *d* to its visual representation:
     - \(c: D \rightarrow Visual\ Representation\)

### Examples:

1. **Simple Design:**
   - Let \(d_1\) be a simple design: \(d_1 = (100px, 50px)\)

2. **Hierarchical Design:**
   - Let \(d_2\) be a design with sub-designs and content:
     - \(d_2 = (200px, 100px, \{d_{2.1}, d_{2.2}\}, \{image_1, text_1\})\)

### Proof:

1. **Existence Proof:**
   - Given any design *d*, its existence is confirmed by the definition of designs as rectangles.

2. **Rendering Process:**
   - The code rendering process *c* transforms a design *d* into its visual representation, satisfying \(c: D \rightarrow Visual\ Representation\).

3. **Hierarchy Handling:**
   - The hierarchical nature of designs is accommodated by the definition of designs in *D*.

### Conclusion:

The Design to Code Theorem provides a mathematical foundation for the systematic transformation of designs into visual representations through a code rendering process. This formulation, supported by examples and proofs, establishes the conceptual framework for translating designs, represented as rectangles, into executable code.


## Motivation and Approach

In recognizing this challenge, I took it upon myself as a personal mission to find a solution. The prospect of going against the crowd and the aspiration to make a meaningful impact drove me to embark on a journey of self-learning, research, and original thinking. The realization that I could bring about change not only in the world but also in my own perspective motivated me to take on this challenge.

The problem I set out to solve was unifying the diverse UI frameworks on the client side. Initially, I developed a code generator targeting any framework. However, I later expanded my vision to unify solutions, irrespective of whether the interface was generated on the backend or the client side. To achieve this, I conceived a design interaction language with the aim of mimicking the actions of designers and using them as the primary source of truth.

## Unifying Solutions and Gaining Leverage

This approach provided me with a unique leverage point in comparison to trending projects such as Svelte and server-rendered React projects. Working independently and free from external opinions allowed me to progress at my own pace and stay true to the vision of my project.

From a simple code generator, my design evolved to support low code, no code, and most recently, design-to-code functionality. What sets my project apart is its contribution to a broader trend in the market—AI-driven computing. As a cost-efficient alternative to AI, low code systems offer a similar solution, motivating me to continue and innovate in this space.

## Design Interaction Language: The Solution

At the core of frontend development is the manipulation of the show/hidden state of components and their variants. Isolating API data from the view layer prompted me to standardize the composition of components for building larger ones. I established a philosophy for component composition that can be applied across frameworks for scalable systems.

The rules are as follows:

- A component can have distinct visual variants.
- A component can have child components.
- A parent component can decide to show/hide its child components.
- A component can have content.
- Content can be text, an image, or another component.

These rules formed the basis for a code generator that seamlessly scaled across different frameworks. The transition to a design-to-code approach was achieved by recognizing that designers conceptualize everything as rectangles with colors and spacing. This simple rule paved the way for finding common ground between design and development.

## Design to Code Rules

1. A component is a rectangle.
2. It inherits the rules mentioned above.

## Project Motivation

The overarching goal of this project is to build an efficient system capable of generating code for different business domains. To tackle this wide-ranging challenge, I narrowed down the problem to developing an efficient technique for building UIs. By recursively building UIs, I aim to extend this technique to address other challenges, such as backend development and business-specific domains, fundamentally addressing the core of the problem.

This project is a testament to the potential for innovation and efficiency when confronting challenges with a thoughtful and systematic approach. The journey from code generation to a comprehensive design-to-code solution reflects not only the evolution of the project but also its adaptability to emerging trends in the tech landscape.

# Wiki Section: Documents


## 1. [Code-generation-to-ReactJS](https://github.com/imvetri/ui-editor/wiki/Code-generation-to-ReactJS)

## Introduction

The process of code generation in the context of ReactJS within the ui-editor project is a key aspect that addresses challenges in web development. This document provides insights into how the code generator was conceived, designed, and implemented to offer an efficient solution for frontend engineering.

## Problem Statement

Web development is often costly due to the lack of standards in visual interface development. Proprietary technologies like C# and Java have their own standards, but the JavaScript ecosystem, driven by open tech support, lacks a unified approach. The absence of standardization led to challenges in knowledge sharing and hindered the efficient development of custom interfaces.

## Motivation

Recognizing the need for a standardized approach, the ui-editor project took on the challenge of unifying diverse UI frameworks on the client side. The initial focus was on building a code generator that could target any framework, providing flexibility and scalability.

## Evolution of the Solution

### Phase 1: Component-based Code Generation

The initial phase involved building a code generator that operated based on a philosophy of component composition. This laid the foundation for scalable systems, adhering to the principles of component-driven development. The core rules included the existence of components, distinct visual variants, child components, content types (text, image, or another component), and the ability to show/hide child components.

### Phase 2: Design Interaction Language

To further enhance the solution, the project introduced a design interaction language. Inspired by mimicking what designers do, the goal was to empower designers as the source of truth. This language, coupled with a design tool, enabled the generation of code directly from designers' input. It aimed to bridge the gap between backend-generated and client-generated interfaces.

### Phase 3: Unifying Design to Code

Taking inspiration from the simplicity of rectangles in design, the project transitioned to a design-to-code paradigm. This involved defining a component as a rectangle, inheriting the rules established in the component-based code generation phase. This approach provided a clear, unified language for both designers and developers.

## Significance and Advancements

The ui-editor project's code generation approach holds significance in several aspects:

1. **Scalability:** The code generator scales across different frameworks, making it versatile and adaptable.
  
2. **Low Code and No Code:** The evolution of the design interaction language and design-to-code paradigm positions the project in the low code and no code space, offering efficient solutions at a lower cost.

3. **Lesson for AI-Driven Computing:** The project serves as a lesson in the trend of AI-driven computing. As a low code system, it competes with AI by providing similar solutions at a more efficient cost.

## Conclusion

The code-generation-to-ReactJS aspect of the ui-editor project represents a thoughtful evolution aimed at solving challenges in frontend engineering. By unifying diverse UI frameworks, introducing a design interaction language, and transitioning to a design-to-code paradigm, the project offers a unique and efficient solution for UI development.

   Explore the specifics of how code generation works in the context of ReactJS within the ui-editor project.

## 2. [Features](https://github.com/imvetri/ui-editor/wiki/Features)

## Elevating Frontend Development with User-Friendly Features

Explore the distinctive features of the ui-editor project designed to empower frontend developers, enhance collaboration with designers, and revolutionize UI development.

## 1. **Seperation of Concerns - Clarity for Beginners**

Modern frameworks often introduce complexity by mixing view, styling, and callbacks in a single file. The ui-editor project simplifies this for beginners by adopting a separation of concerns approach. Distinct interfaces for view, style, state, and callbacks ensure clarity, making it easier for developers to grasp and manage code.

## 2. **Component Composability - Build with Ease**

Say goodbye to the challenges of managing state between components. The ui-editor's component-driven development allows you to build larger components effortlessly. Child components publish actions, and parent components subscribe to these actions, enabling a seamless bottom-up approach to building pages.

## 3. **Code Generation - Readable Code, Efficient Development**

Creating readable code just became a breeze. The ui-editor's robust code generator takes care of combining view, style, state, and callbacks into a clean and understandable React component. Say hello to efficient development without the hassle of manually managing various code aspects.

## 4. **Slick - Everything is Data - Flexibility at Its Core**

Flexibility is key. With the ui-editor project's "Slick" approach, everything is treated as data. HTML, CSS, state, events, and reducers are handled as strings, offering flexibility in handling diverse code elements. Pass a string to eval with Babel, and voila, you have a runtime in the browser.

## Scalability for Users

### 1. **Effortless Component Composition**

Building larger components is now a breeze. With rules defining components, visual variants, child components, and content types, users can effortlessly compose components. The resulting code generator seamlessly scales across different frameworks, ensuring a hassle-free development experience.

### 2. **Empowering Designers with Design Interaction Language**

Say goodbye to communication gaps between designers and developers. The introduction of a design interaction language allows designers to take the lead. By mimicking designers' actions, this feature ensures that designers become the source of truth, making collaboration smoother and more efficient.

### 3. **Design-to-Code Paradigm - Streamlining Development**

For developers who dream of a standardized and efficient UI development process, the design-to-code paradigm is the answer. Defining a component as a rectangle and inheriting established rules simplifies the language for both designers and developers. The scalable approach ensures efficient and standardized UI development.

## Conclusion

The user-centric features of the ui-editor project bring simplicity, efficiency, and collaboration to the forefront of frontend development. From beginners seeking clarity to seasoned developers craving flexibility, these features cater to diverse user needs, making UI development an enjoyable and transformative experience.

## 3. [Goals](https://github.com/imvetri/ui-editor/wiki/Goals)
# Goals

## Shaping the Future of UI Development - Goals and Objectives

This document provides an in-depth exploration of the goals and objectives driving the ui-editor project. From UX design to UI building and schema creation, discover the ambitious aims that underpin this transformative endeavor.

## 1. **UX Design Tool - Enabling Creativity**

**End Result:** The ui-editor project aspires to be a cutting-edge UX design tool, fostering creativity and innovation. Users should seamlessly create rectangles, establishing a design system that includes spacing, color, and content types such as text, image, or other rectangles.

**Innovation Through Excalidraw Integration:**
Efficiency is key, and the plan includes leveraging Excalidraw to enhance the drawable layer. Integrating Excalidraw's existing features offers a powerful solution, allowing for the replacement of tools like Jira, Slack, Confluence, and Miro. This integration aims to streamline workflows in enterprises and businesses, facilitating smoother collaboration and communication.

![UX Design Tool](https://user-images.githubusercontent.com/6542274/126032138-207c871a-988d-4aca-8338-5fef7dfd68fe.png)

## 2. **UI Builder - Empowering Interaction**

**End Result:** The ui-editor project envisions becoming an advanced UI builder. Users should effortlessly create interactive components and generate variants. The goal is to empower users to construct entire component ecosystems, linking them through events, thereby achieving a comprehensive UI-building experience.

**Efficient Excalidraw Reuse:**
The project strategizes to efficiently reuse Excalidraw, aligning with its vision for seamless integration. By incorporating Excalidraw's capabilities, the ui-editor aims to outperform existing UI builders, offering a feature-rich platform for users to bring their design concepts to life.

![UI Builder](https://user-images.githubusercontent.com/6542274/126032184-3ea1dfbf-7da7-444a-a29a-6ef020f7bc88.png)

## 3. **Schema Builder - Organizing Business Domain**

**End Result:** The ui-editor project seeks to excel as a schema builder, allowing users to create comprehensive business domain information. The tool should simplify the representation of complex structures as a class diagram, facilitating easy generation of code for persistent storage, in-memory storage, and HTTP protocol-based access.

**Strategic Excalidraw Integration:**
Efficiency in schema creation is enhanced through the integration of Excalidraw. This integration aims to optimize the representation of business domain information. Users can create schema components for different authentication and roles, shaping a dynamic and powerful schema builder.

![Schema Builder](https://user-images.githubusercontent.com/6542274/126032164-87b2ce4a-6c9a-4809-a87c-75316d0080ec.png)

## Conclusion

In conclusion, the ui-editor project is poised to revolutionize the landscape of UI development, ushering in a new era of creativity, efficiency, and collaboration. By strategically integrating Excalidraw, the project not only meets its ambitious goals but also surpasses expectations.

## Harnessing Excalidraw's Features for Unprecedented Innovation

### 1. **Visual Creativity Unleashed**

Excalidraw provides a canvas where visual creativity knows no bounds. By seamlessly integrating Excalidraw into the ui-editor project, users can harness the power of an intuitive and feature-rich drawing tool. This unleashes a new realm of possibilities for UX designers to ideate, iterate, and visualize their concepts effortlessly.

### 2. **Efficiency in Collaboration**

The collaborative features of Excalidraw become a cornerstone in the ui-editor's success. Teams can now work together in real-time, breaking down silos and enhancing communication. Excalidraw's collaborative drawing board transcends traditional boundaries, making it an ideal companion for the ambitious goals of the ui-editor project.

### 3. **Streamlined UI Building**

The ui-editor project leverages Excalidraw's capabilities to streamline UI building. With a visual representation of components and their variants, the integration with Excalidraw simplifies the complex process of designing and constructing interactive UI elements. This synergy between ui-editor and Excalidraw marks a paradigm shift in UI building paradigms.

### 4. **Dynamic Schema Creation**

Excalidraw's influence extends to the schema-building aspect of the ui-editor project. The intuitive nature of Excalidraw's diagramming facilitates the creation of comprehensive class diagrams for business domain information. This dynamic schema creation empowers users to design, modify, and iterate on complex structures with unparalleled ease.

## A Unified Solution for the Future

The ui-editor project's conclusion is not just an endpoint but a launchpad for a unified solution that spans UX design, UI building, and schema creation. By strategically incorporating Excalidraw and tapping into its extensive feature set, the ui-editor project stands as a testament to innovation in the frontend engineering landscape. As the project evolves, the synergy with Excalidraw is set to redefine how teams collaborate, ideate, and bring their creative visions to life.


## 4. [Ideas](https://github.com/imvetri/ui-editor/wiki/Ideas)
   Explore innovative ideas and concepts related to the ui-editor project, offering insights into potential future developments.

## 5. [Interesting-Features](https://github.com/imvetri/ui-editor/wiki/Challenging-features)
   Delve into challenging features that the ui-editor project tackles, providing a deeper understanding of its technical aspects.

# Wiki Section: Tutorials

**Welcome to the ui-editor wiki! Below are basic tutorials on how to use the tool to build and generate component code for a ReactJS project.**

## 1. [Getting started](https://github.com/imvetri/ui-editor/wiki/Getting-Started)
   A beginner-friendly guide on getting started with the ui-editor tool, covering the initial setup and navigation.

## 2. [Create simple component](https://github.com/imvetri/ui-editor/wiki/Create-a-simple-component)
   Learn how to create a simple UI component using the ui-editor tool, providing a foundational understanding of component creation.

## 3. [Create simple component with content from state](https://github.com/imvetri/ui-editor/wiki/Create-simple-component-with-content-from-state)
   Explore the process of creating a component with dynamic content sourced from state, enhancing the interactivity of the UI.

## 4. [Create component with dynamic content](https://github.com/imvetri/ui-editor/wiki/Create-component-with-dynamic-content)
   Understand how to create a component with dynamic content, expanding the capabilities of UI elements.

## 5. [Create component with dynamic style](https://github.com/imvetri/ui-editor/wiki/Create-component-with-dynamic-style)
   Learn to create components with dynamic styles, allowing for flexibility and customization in the visual presentation.

## 6. [Compose bigger components using smaller components](https://github.com/imvetri/ui-editor/wiki/Compose-bigger-components-using-smaller-components)
   Discover the art of composing larger components using smaller ones, emphasizing the principles of component-driven development.

## 7. [Component composition - Subscribe to child event](https://github.com/imvetri/ui-editor/wiki/Component-composition---Subscribe-to-child-components)
   Gain insights into component composition by learning how to subscribe to child events, fostering inter-component communication.

## 8. [Code Generation](https://github.com/imvetri/ui-editor/wiki/Code-generation-to-ReactJS)
   Delve into the details of code generation in the context of ReactJS, exploring how the ui-editor tool facilitates the generation of efficient code.

# Wiki Section: Videos

## 1. [Drag and drop Concept](https://vimeo.com/manage/videos/642968726)
   Explore the concept of drag and drop functionality within the ui-editor tool.

## 2. [Unlimited canvas space Concept](https://vimeo.com/manage/videos/555138771)
   Understand the concept of an unlimited canvas space, providing expansive possibilities for UI design.

## 3. [Layout designer Concept](https://vimeo.com/manage/554105526/general)
   Dive into the concept of a layout designer, exploring the tools and features that enhance the design process.

## 4. [ReactJS Code generation concept](https://vimeo.com/manage/549552977/general)
   Gain insights into the concept of code generation specific to ReactJS within the ui-editor project.

## 5. [Todo app builder](https://vimeo.com/manage/511559933/general)
   Explore the process of building a todo app using the ui-editor tool.

## 6. [Add events on screen to Div](https://vimeo.com/manage/486768355/general)
   Learn how to add events to screen elements, enhancing the interactivity of the UI.

## 7. [Editor parts and pieces Sample](https://vimeo.com/manage/464104903/general)
   Get a glimpse of various editor parts and pieces within the ui-editor tool.

## 8. [Architecture concept - Message passing between components](https://vimeo.com/manage/386239513/general)
   Understand the architectural concept of message passing between components, highlighting the communication infrastructure.

## 9. [Building component with dynamic state Concept](https://vimeo.com/manage/386239443/general)
   Learn the concept of building a component with dynamic state, offering insights into state management.

## 10. [Building component with dynamic contents Concept](https://vimeo.com/manage/386239417/general)
   Explore the concept of building a component with dynamic contents, adding versatility to UI elements.

## 11. [Building a component with dynamic state Concept](https://vimeo.com/manage/386239387/general)
   Understand the concept of building a component with dynamic state, emphasizing the dynamic nature of UI elements.
