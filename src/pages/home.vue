<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar color="teal" :sliding="true" no-shadow>
      <f7-nav-left>
        <f7-link color="teal">Sign Up</f7-link>
      </f7-nav-left>
      <f7-nav-title sliding>layiraa</f7-nav-title>
      <f7-nav-right>
        <f7-link color="teal" icon-ios="f7:search" icon-aurora="f7:search" icon-md="material:search"></f7-link>
      </f7-nav-right>
      <f7-nav-title-large>layiraa</f7-nav-title-large>
    </f7-navbar>

    <addname-component></addname-component>
    <name-list heading="Recent Contributions"></name-list>
    <people-list></people-list>

  </f7-page>
</template>
  <script>
    import NameList from "../components/nameList";
    import AddnameComponent from "../components/addnameComponent";
    import PeopleList from "../components/peopleList";
    export default {
      name:'home',
      components: {PeopleList, AddnameComponent, NameList}
    }
  </script>
