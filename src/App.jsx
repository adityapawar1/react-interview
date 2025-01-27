import React from "react";
import Tree from "./components/Tree";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main>
      <NavigationBar />

      <div className="content">
        <p>
          Changing our city, one tree at a time.
        </p>

        <p>
          Since 1994, Our City Forest has been the leading nonprofit in Silicon Valley for urban forestry and environmental education.
          We believe in the POWER OF TREES to transform homes, communities and cities and the POWER OF PEOPLE to help us achieve this needed transformation.
          Help us continue to grow by donating or by becoming a sustaining member.
        </p>


        <div className="tree-list">
          <Tree
            name={"Forest Green Oak"}
            description={
              "This is an upright growing, vigorous oak with a strong central leader."
            }
            dateAdded={"2024-06-23T10:48:07"}
            imageLink={"https://www.svgrepo.com/show/508699/landscape-placeholder.svg"}
          />

          <Tree
            name={"Frontier Elm"}
            description={
              "This hardy, tolerant tree is a good choice for residential landscapes and along city streets."
            }
            dateAdded={"2024-06-23T10:48:07"}
            imageLink={"https://www.svgrepo.com/show/508699/landscape-placeholder.svg"}
          />
        </div>
        <h3>Tree Inventory</h3>

      </div>
      <Footer />
    </main>
  );
}
