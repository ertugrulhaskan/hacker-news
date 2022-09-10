import React from "react";

function SocialMedia() {
  return (
    <div className="rounded-xl bg-gray-100">
      <h2>Follow on social media</h2>
      <div className="mx-4 mb-4 flex flex-row">
        <div className="h-12">
          <a
            href="https://github.com/ertugrulhaskan"
            target="_blank"
            className="github hover:fill[#6e5494]; mr-4 inline-block h-9 w-9"
            rel="noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm0-29.809c7.626 0 13.809 6.182 13.809 13.809 0 7.626-6.182 13.809-13.809 13.809S2.191 23.626 2.191 16C2.191 8.374 8.374 2.191 16 2.191z" />
              <path d="M16 27.597c6.405 0 11.597-5.192 11.597-11.597S22.405 4.403 16 4.403 4.403 9.595 4.403 16 9.595 27.597 16 27.597zm-6.616-9.501c1.048 0 1.572 1.048 1.572 1.048.92 1.561 2.556 1.31 3.144 1.048 0-.524.229-1.316.524-1.572-2.289-.258-4.194-1.572-4.194-4.192s.526-3.144 1.05-3.668c-.106-.258-.544-1.213.016-2.62 0 0 1.03 0 2.078 1.572.519-.519 2.096-.524 2.62-.524.523 0 2.1.005 2.619.524 1.048-1.572 2.08-1.572 2.08-1.572.56 1.407.122 2.362.016 2.62.524.524 1.048 1.048 1.048 3.668s-1.903 3.934-4.192 4.192c.295.256.524 1.157.524 1.572v3.668H14.1s.006-1.243 0-2.096c-2.868.617-3.668-1.572-3.668-1.572-.524-1.048-1.048-1.572-1.048-1.572-1.048-.623 0-.524 0-.524z" />
            </svg>
          </a>
          <a
            href="https://codepen.io/ertugrulhaskan/pens/public"
            target="_blank"
            className="codepen -ring-offset-2 mr-4 inline-block h-[32px] w-[32px] translate-y-[-2px] rounded-full ring-[3px] ring-black hover:fill-green-700 hover:ring-green-700"
            rel="noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M241.239 303.936c-15.322-10.357-30.742-20.569-46.062-30.93-2.03-1.373-3.43-1.472-5.502-.029l-38.871 26.154C181.966 319.905 244 361.317 244 361.317v-53.786c-.012-1.224-1.553-2.78-2.761-3.595zm-46.147-63.27c15.454-10.16 30.851-20.409 46.109-30.86 1.486-1.018 2.775-3.509 2.799-5.334v-51.706s-62.033 41.124-93.262 61.942c13.7 9.159 26.671 17.913 39.787 26.443 1.02.662 3.396.284 4.567-.485zm74.746-31.312a4521.517 4521.517 0 0 0 47.627 31.815c.916.604 2.92.602 3.839 0l39.751-26.467L268 152.484v53.35c.01 1.201.805 2.821 1.838 3.52zm-11.729 21.015c-1.21-.802-3.611-.528-4.743.168-4.817 2.962-9.463 6.203-14.164 9.355-8.248 5.53-25.356 17.023-25.356 17.023l38.842 25.865c1.748 1.157 4.436 1.22 6.26.111l39.014-25.993c.001 0-34.079-22.701-39.853-26.529zM141 237.116v39.609l29.622-19.838z" />
              <path d="M256 32C132.288 32 32 132.288 32 256s100.288 224 224 224 224-100.288 224-224S379.712 32 256 32zm139 265.006c0 5.785-2.652 9.868-7.511 13.094a38019.909 38019.909 0 0 0-123.286 82.188c-5.854 3.918-11.174 3.754-16.984-.137-40.783-27.314-81.719-54.546-122.625-81.676-5.11-3.389-7.594-7.557-7.594-13.73v-79.729c0-6.141 2.521-10.332 7.624-13.716 40.906-27.13 81.939-54.363 122.724-81.676 5.818-3.896 11.094-4.007 16.938-.095a41090.004 41090.004 0 0 0 123.261 82.195c4.678 3.106 7.453 6.943 7.453 12.66v80.622z" />
              <path d="M316.247 273.234a3826.352 3826.352 0 0 1-45.386 30.332c-2.412 1.588-2.888 3.318-2.861 6.189v51.346l93.039-62.004-38.527-25.882c-2.345-1.604-3.93-1.567-6.265.019zM370 276.676V237.06l-29.59 19.873z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/ertugrulhaskan"
            target="_blank"
            className="linkedin mr-4 inline-block h-9 w-9"
            rel="noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm0-29.809c7.626 0 13.809 6.182 13.809 13.809S23.626 29.809 16 29.809 2.191 23.626 2.191 16 8.374 2.191 16 2.191z" />
              <path d="M16 27.597c6.405 0 11.597-5.192 11.597-11.597S22.405 4.403 16 4.403 4.403 9.595 4.403 16 9.595 27.597 16 27.597zm-3.698-6.123H9.398v-8.737h2.904v8.737zm1.607-8.737h2.904v1.238c.385-.595 1.076-1.443 2.617-1.443 1.91 0 3.343 1.249 3.343 3.933v5.01H19.87V16.8c0-1.174-.42-1.975-1.471-1.975-.802 0-1.28.54-1.489 1.062-.077.186-.096.447-.096.708v4.88H13.91c-.001-.001.038-7.918-.001-8.738zm-3.04-4.212c.993 0 1.605.652 1.624 1.509 0 .839-.631 1.51-1.643 1.51h-.018c-.975 0-1.605-.672-1.605-1.51-.001-.857.649-1.509 1.642-1.509z" />
            </svg>
          </a>
          <a
            href="https://twitter.com/ertugrulhaskan"
            target="_blank"
            className="twitter inline-block h-9 w-9"
            rel="noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm0-29.809c7.626 0 13.809 6.182 13.809 13.809S23.626 29.809 16 29.809 2.191 23.626 2.191 16 8.374 2.191 16 2.191z" />
              <path d="M16 27.597c6.405 0 11.597-5.192 11.597-11.597S22.405 4.403 16 4.403 4.403 9.595 4.403 16 9.595 27.597 16 27.597zm-3.338-8.391c-.903-.312-1.714-1.028-1.919-1.702-.062-.218-.041-.229.533-.229l.595-.01-.503-.239c-.596-.301-1.139-.809-1.406-1.328-.195-.374-.441-1.318-.369-1.391.021-.031.236.031.482.114.708.26.8.197.39-.239-.769-.789-1.006-1.961-.636-3.072l.174-.498.677.674c1.386 1.36 3.018 2.169 4.885 2.407l.513.062-.031-.508c-.092-1.318.719-2.521 2.001-2.988.472-.166 1.273-.187 1.797-.042.206.062.595.27.872.456l.503.343.554-.177c.308-.093.719-.249.903-.353.175-.094.329-.145.329-.114 0 .176-.38.778-.698 1.11-.432.467-.308.508.564.197.523-.176.534-.176.431.021-.062.104-.38.467-.719.799-.575.571-.605.633-.605 1.11 0 .736-.349 2.272-.698 3.112-.647 1.578-2.032 3.207-3.418 4.027-1.95 1.151-4.547 1.442-6.733.768-.728-.229-1.981-.81-1.981-.913 0-.031.38-.073.842-.083a5.746 5.746 0 002.751-.768l.554-.332-.634-.214z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
