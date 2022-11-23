function TreesPlanted({ title, ratio, CO2Total }) {
  function trees() {
    return Math.round(CO2Total * 1.575 * (1 / ratio) * 100) / 100;
  }

  return (
    <p>
      {title}: {trees() + " trees"}
    </p>
  );
}

export default TreesPlanted;
