using System;
using System.Collections.Generic;

#nullable disable

namespace CodeEditorApiDataAccess.Data
{
    public partial class Tutorial
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Author { get; set; }
        public int? CourseId { get; set; }
        public string Prompt { get; set; }
        public DateTime CreateDate { get; set; }
        public string ModifyDate { get; set; }
        public bool IsPublished { get; set; }
        public int StudentCount { get; set; }

        public virtual User AuthorNavigation { get; set; }
        public virtual Course Course { get; set; }
    }
}
