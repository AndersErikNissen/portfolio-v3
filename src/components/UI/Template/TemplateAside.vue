<template>
  <aside class="flex">
    <div class="flex">
      <section>
        <h5 class="clamp">Ansvar</h5>
        <ul class="clean">
          <li v-for="ansvar in cleanRoles" :key="ansvar">
            <span>
              {{ ansvar }}
            </span>
          </li>
        </ul>
      </section>
      <section>
        <h5 class="clamp">Teknologier</h5>
        <ul class="clean">
          <li v-for="filter in cleanFilters" :key="filter">
            <span>
              {{ filter }}
            </span>
          </li>
        </ul>
      </section>
      <section class="template__aside--links flex">
        <h5 class="clamp">Links</h5>
        <a
          class="btn round"
          v-if="dataObj.links.external != ''"
          :href="dataObj.links.external"
        >
          <span> BESØG SIDEN </span>
        </a>
        <a
          class="btn round"
          v-if="dataObj.links.github != ''"
          :href="dataObj.links.github"
        >
          <span> SE PÅ GITHUB </span>
        </a>
      </section>
    </div>
  </aside>
</template>

<script>
export default {
  name: "TemplateAside",
  props: {
    dataObj: {
      type: Object,
      required: true,
    },
  },
  computed: {
    cleanRoles() {
      let cleanArr = [];
      if (this.dataObj.roles) {
        this.dataObj.roles.forEach((role) => {
          if (role != "") {
            cleanArr.push(role);
          }
        });
      }
      return cleanArr;
    },
    cleanFilters() {
      let cleanArr = [];
      if (this.dataObj.roles) {
        this.dataObj.filters.forEach((role) => {
          if (role != "") {
            cleanArr.push(role);
          }
        });
      }
      return cleanArr;
    },
  },
};
</script>

<style lang="scss" scoped>
aside {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  & a {
    &.btn {
      margin: .2rem 0;
    }
  }
  & section {
    margin-bottom: 1rem;
  }
  & div {
    flex-direction: column;
    background-color: rgb(235, 235, 235);
    border-radius: var(--border-round-edge);
    padding: var(--padding-5);

  }
  & .template__aside--links {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  @media screen and (max-width: 1024px) {
    margin: var(--margin-outer);
    & section {
      margin: 1rem;
    }
    & div {
      flex-direction: row;
      justify-content: space-evenly;
      align-items: flex-start;
      width: 100%;
      padding: var(--padding-2);
    }
  }
  @media screen and (max-width: 620px) {
    & div {
      flex-direction: column;
      justify-content: center;
      width: 100%;
    }
  }
}
</style>