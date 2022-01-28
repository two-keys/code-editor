﻿using CodeEditorApi.Helpers;
using CodeEditorApiDataAccess.StaticData;
using System.ComponentModel.DataAnnotations;

namespace CodeEditorApi.Features.Auth.Register
{
    public class RegisterBody
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [StringLength(30)]
        public string Name { get; set; }

        [Required]
        [StringLength(20)]
        [RegularExpression(RegExp.PasswordExpression, ErrorMessage = "Password does not meet criteria")]
        public string Password { get; set; }

        [Required]
        public Roles Role { get; set; }

        public string? AccessCode { get; set; }

    }
}
